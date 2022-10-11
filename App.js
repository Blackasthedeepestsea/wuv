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
  Animated,
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

function HomeScreen({navigation}) {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screen}>
          <Image
            source={require('./android/app/src/assets/images/brightdive.png')}
          />
          <Text style={styles.intro}>
            BrightDive is a tool to guide you in healing yourself.
          </Text>
          <Text style={styles.intro}>
            It provides structure, encouragement, education
          </Text>
          <Text style={styles.intro}>
            {' '}
            and total acceptance of you as you are now.
          </Text>
          <Animated.View style={[styles.fadeinContainer, {opacity: fadeAnim}]}>
            <Text style={styles.text} {...fadeIn}>
              This Is Radical Oasis! What up?
            </Text>
          </Animated.View>
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
          <Button
            title="Fade In"
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
  fadeinContainer: {
    backgroundColor: 'powderblue',
    padding: 20,
  },
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
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1.3,
    margin: 13,
    textAlign: 'center',
  },
});

export default App;
