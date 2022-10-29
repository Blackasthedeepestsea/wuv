import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';

import CustomButton from './android/app/src/components/CustomButton';
import Form from './Form';

function LoginScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screen}>
          <Text style={styles.intro}>
            Crawl Out of Hell: Surviving the New World Order
          </Text>
          <Text style={styles.subsubheading}>1 Step Away from Game Play</Text>
          <Text style={styles.subheading}>Register</Text>
          <LinearGradient
            colors={['orange', '#3EB489', '#246EE9']}
            style={[
              styles.linearGradient,
              {
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 20,
                width: '80%',
                marginVertical: 30,
              },
            ]}>
            <View>
              <Form></Form>
            </View>
          </LinearGradient>
          <CustomButton onPress={() => navigation.navigate('GameScreen')}>
            Enter Game
          </CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: 'purple',
  },
  input: {
    backgroundColor: 'grey',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginTop: 20,
    marginBottom: 50,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
  },
  intro: {
    fontSize: 30,
    color: 'white',
    letterSpacing: 1.9,
    margin: 4,
    textAlign: 'center',
    fontFamily: 'Courier',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 23,
    color: 'orange',
    letterSpacing: 1,
    margin: 4,
    textAlign: 'center',
    fontFamily: 'Courier',
    fontWeight: 'bold',
    marginVertical: 10,
    borderBottomColor: 'limegreen',
    borderTopColor: 'limegreen',
    borderWidth: 2,
  },
  subsubheading: {
    fontSize: 18,
    color: 'white',
    letterSpacing: 1,
    margin: 4,
    textAlign: 'center',
    fontFamily: 'Courier',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default LoginScreen;
