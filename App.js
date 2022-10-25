/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet} from 'react-native';

import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';
import RealHelpScreen from './RealHelpScreen';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="RealHelpScreen" component={RealHelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          barStyle={{backgroundColor: 'black'}}
          labelStyle={{fontSize: 17}}
          activeColor={'orange'}
          inactiveColor={'white'}
          shifting={true}>
          <Tab.Screen
            options={{
              tabBarLabel: 'REAL HELP',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={16} />
              ),
            }}
            name="RealHelpScreen"
            component={RealHelpScreen}
          />
          <Tab.Screen
            options={{
              tabBarLabel: 'HOME',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="bell" color={color} size={16} />
              ),
            }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{
              tabBarLabel: 'SPLASH SCREEN',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={16} />
              ),
            }}
            name="SplashScreen"
            component={SplashScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
