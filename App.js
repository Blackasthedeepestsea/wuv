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
import LinearGradient from 'react-native-linear-gradient';
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
    <LinearGradient
      colors={['white', 'orange', '#3EB489', '#246EE9', 'black']}
      style={styles.linearGradient}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.screen}>
            <Image
              style={styles.image}
              source={require('./android/app/src/assets/images/pumpkinparty.png')}
            />
            <Text style={styles.intro}>Crawl Out of Hell: The App</Text>
            <Text style={styles.subheading}>
              For immediate help choose one of the options below!
            </Text>

            <CustomButton
              onPress={() => navigation.navigate('Details')}></CustomButton>
            <LinearGradient
              colors={['orange', '#3EB489', '#246EE9', 'black']}
              style={styles.linearGradient}>
              <CustomButton></CustomButton>
            </LinearGradient>
            <CustomButton></CustomButton>
            <Text style={styles.intro}>
              For long term healing choose the option below:
            </Text>
            <CustomButton></CustomButton>
            <Button
              onPress={() => Alert.alert('You are home and loved')}
              title="Best Button"
              color="#3EB489"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              title="Go to Details"
              color="#246EE9"
              onPress={() => navigation.navigate('Details')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
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
  image: {
    borderRadius: 150,
    margin: 15,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  intro: {
    fontSize: 30,
    color: 'black',
    letterSpacing: 1.9,
    margin: 4,
    textAlign: 'center',
    fontFamily: 'Courier',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 23,
    color: 'black',
    letterSpacing: 1,
    margin: 4,
    textAlign: 'center',
    fontFamily: 'Courier',
    fontWeight: 'bold',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default App;
