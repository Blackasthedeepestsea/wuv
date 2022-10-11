/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CustomButton from './android/app/src/components/CustomButton';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screen}>
          <Image
            source={require('./android/app/src/assets/images/brightdive.png')}
          />
          <Text style={styles.intro}>
            Bright Dive is a tool to guide you in healing yourself.
          </Text>
          <Text style={styles.intro}>
            It provides structure, encouragement, education
          </Text>
          <Text style={styles.intro}>
            and total acceptance of you as you are now.
          </Text>
          <CustomButton></CustomButton>
          <Button
            onPress={() => Alert.alert('You are home and loved')}
            title="Best Button"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

//const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: 'purple',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  intro: {
    fontSize: 30,
    color: 'black',
    letterSpacing: 1.3,
    margin: 13,
    textAlign: 'center',
  },
});

export default App;
