import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Top from './Top';
function Devices() {
  return (
      <View style={styles.container}>
      <Top title="Devices"/>
    <View style={styles.box}>
      <Text>Device</Text>
    </View></View>
  );
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

const styles=StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
    },
    box:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Devices" component={Devices} />
        <Tab.Screen name="Connection" component={Connection} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
