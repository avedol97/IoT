import {StyleSheet, Text, View} from 'react-native';
import Top from './Top';
import React, {Component} from 'react';

class Connection extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Top title="Connection"/>
                    <Text>In progress!</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
});

export default Connection;
