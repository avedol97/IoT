import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Top from './Top';
import React, {Component} from 'react';


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
            data = <></>;
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

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 150,
        borderWidth: 1,
        backgroundColor: '#00BFFF',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    scrol: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 35,
    },
});

export default Devices;
