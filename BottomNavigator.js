import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Devices from './Devices';
import Connection from './Connection'
import React, { Component } from 'react';

const Tab = createBottomTabNavigator();

class BottomNavigator extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Devices" component={Devices}  />
                <Tab.Screen name="Connection" component={ Connection }/>
            </Tab.Navigator>
        );
    }
}

export default BottomNavigator;
