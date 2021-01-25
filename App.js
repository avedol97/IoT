import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Devices from './Devices';
import ModalScreen from './ModalScreen';
import Connection from './Connection';
import BottomNavigator from './BottomNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

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
                <RootStack.Navigator mode="modal" headerMode="none">
                    <RootStack.Screen name="BottomNavigator" component={BottomNavigator} unmountOnBlur={true} options={{unmountOnBlur: true}}/>
                    <RootStack.Screen name="MyModal" component={ModalScreen} unmountOnBlur={true} options={{unmountOnBlur: true}}/>
                </RootStack.Navigator>
            </NavigationContainer>

        );
    }

}
export default App;
