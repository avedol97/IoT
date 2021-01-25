import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
                <View style={styles.box}>
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
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>
                </View>

                <View style={styles.button}>
                    <Button onPress={() => navigation.navigate('Devices')} title="Cancel"></Button>
                    <Button onPress={() => {this.saveDevice()}} title="Save"></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
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
    button: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }
});


export default ModalScreen;
