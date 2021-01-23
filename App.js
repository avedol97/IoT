import React, {Component} from 'react';

import {StyleSheet, Text, View, Button, TouchableOpacity, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Top from './Top';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';

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
                    <Tab.Screen name="Devices" component={Devices}/>
                    <Tab.Screen name="Connection" component={Connection}/>
                    <Tab.Screen name="MyModal" component={ModalScreen}/>
                </Tab.Navigator>
            </NavigationContainer>

        );
    }

}


function Devices({navigation}) {
    return (
        <View style={styles.container}>
            <Top title="Devices"/>
            <View style={styles.place}>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyModal')}
                                      title="Open Modal"><Text style={{
                        fontSize: 50,
                        textAlign: 'center',
                        alignItems: 'center',
                        flex: 1,
                    }}>+</Text></TouchableOpacity>
                </View></View></View>
    );
}

class ModalScreen extends Component<{ navigation: any }> {
    constructor() {
        super()
        this.state={
            table:[],
            name: null,
            place: null,
            command: null,

        }
    }

    getValues = () => {
        this.setState(prevState => ({
            table: [...prevState.table, {
                name: "xd",
                place: this.state.place,
                command: this.state.command,
            }]
        }),()=>console.log(this.state.table))

    }

    render() {
        let {navigation} = this.props;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({name: text})}
                    placeholder={'Name'}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({place: text})}
                    placeholder={'Place'}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({command: text})}
                    placeholder={'Command'}
                />
                <Text style={{fontSize: 30}}>Color</Text>
                <View style={styles.textAreaContainer} >
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <Button onPress={() => {navigation.navigate('Devices'), this.getValues()}} title="Save"><Text>Save</Text></Button>
                <Button onPress={() => navigation.navigate('Devices')} title="Cancel"><Text>Cancel</Text></Button>
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
        width: '100%',
        height: '100%',
    },
    place: {
        marginTop: '5%',
        marginLeft: '5%',
        width: '90%',
        height: '75%',
        borderWidth: 1,
    },
    box: {
        flex: 1,
        borderWidth: 1,

    },
    button: {
        width: 90,
        height: 90,
        borderWidth: 1,
        backgroundColor: '#00BFFF',
    },
    textAreaContainer: {
        borderColor: "black",
        borderWidth: 1,
        padding: 5
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start"
    }
});


export default App;
