import React, {Component} from 'react';

import {StyleSheet, Text, View, Button, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Top from './Top';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Devices" component={Devices} unmountOnBlur={true} options={{unmountOnBlur: true}}/>
                    <Tab.Screen name="Connection" component={Connection} unmountOnBlur={true} options={{unmountOnBlur: true}}/>
                    <Tab.Screen name="MyModal" component={ModalScreen} unmountOnBlur={true} options={{unmountOnBlur: true}}/>
                </Tab.Navigator>
            </NavigationContainer>

        );
    }

}

class Devices extends Component<{ navigation: any }> {
    constructor() {
        super();
        this.state = {
            table: [],
            loaded: false,
        };
    }

    loadFromAsyncStorage() {
        AsyncStorage.getItem('Tablica')
            .then(data => {
                console.log(data);
                if (data !== null) {
                    this.setState({
                        table: JSON.parse(data),
                        loaded: true,
                    }, console.log(data));
                }
            });
    }


    componentDidMount() {
        //AsyncStorage.removeItem("Tablica");
        this.loadFromAsyncStorage();
    }

    componentDidUpdate() {
    }

    render() {
        let {navigation} = this.props;
        let data;
        if (this.state.loaded && this.state.table !== null) {
            data = this.state.table.map((val, key) => {
                console.log(val);
                return (
                    <View key={key}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{fontSize: 24}}>{val.name}</Text>
                            <Text style={{fontSize: 16}}>{val.place}</Text>
                        </TouchableOpacity>
                    </View>
                );
            });
        } else {
            data = <><Text>Tak</Text></>;
        }
        return (


                <SafeAreaView style={{flex:1,marginBottom:12,}}>
                    <Top title="Devices"/>
                    <ScrollView>
                        <View style={styles.scrol}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyModal')}
                                          title="Open Modal"><Text style={{fontSize: 50}}>+</Text></TouchableOpacity>
                        {data}
                        </View>
                    </ScrollView>
                </SafeAreaView>

        );
    }
}

class ModalScreen extends Component<{ navigation: any }> {
    constructor() {
        super();
        this.state = {
            table: [],
            name: null,
            place: null,
            command: null,

        };
    }

    componentDidUpdate() {
    }


    getValues() {
        let tempTable = [];
        let obj = {
            name: this.state.name,
            place: this.state.place,
            command: this.state.command,
        };
        if (this.state.table !== null) {

            this.state.table.map((val) => {
                tempTable.push(val);
            });
            tempTable.push(obj);
        } else {
            tempTable.push(obj);
        }

        let temporaryTable = [];
        AsyncStorage.getItem('Tablica')
            .then(data => JSON.parse(data))
            .then(data => {
                if (data !== null) {
                    data.map((val) => {
                        temporaryTable.push(val);

                    });
                    temporaryTable.push(obj);
                } else {
                    temporaryTable.push(obj);
                }

                AsyncStorage.setItem('Tablica', JSON.stringify(temporaryTable)).then(data => {
                    AsyncStorage.getItem('Tablica').then(r => {
                        console.log(r);
                    });
                });
            });
    }

    saveDevice = () =>{
        this.getValues();
        // this.props.navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Devices' }],
        // })


    }

    render() {
        let {navigation} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.box2}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({name: text})}
                        placeholder={'Name'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({place: text})}
                        placeholder={'Place'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({command: text})}
                        placeholder={'Command'}
                    />
                    <Text style={{fontSize: 30, alignSelf: 'flex-start', marginLeft: 45, marginTop: 30}}>Color</Text>
                    <View style={styles.textAreaContainer}>
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            //placeholder="Type something"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>
                </View>

                <View style={styles.buttons}>
                    <Button onPress={() => navigation.navigate('Devices')} title="Cancel"></Button>
                    <Button onPress={() => {this.saveDevice()}} title="Save"></Button>
                </View>
            </View>
        );
    }
}




function Connection() {
    return (
        <View style={styles.container}>
            <Top title="Connection"/>
            <View style={styles.box}>
                <Text>Newww!</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    button: {
        width: 150,
        height: 150,
        borderWidth: 1,
        backgroundColor: '#00BFFF',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textAreaContainer: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginTop: 10,
    },
    textArea: {
        width: 350,
        height: 150,
        justifyContent: 'flex-start',
        backgroundColor: 'yellow',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
    },
    buttons: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    box2: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    scrol: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 35,
    },
});


export default App;
