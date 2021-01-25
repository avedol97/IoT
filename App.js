import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Devices from './Devices';
import ModalScreen from './ModalScreen';
import Connection from './Connection';

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
export default App;
