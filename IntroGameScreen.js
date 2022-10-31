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

import {useNavigation} from '@react-navigation/native';
import CustomButton from './android/app/src/components/CustomButton';
import Form from './Form';

function IntroGameScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screen}>
          <Image
            style={styles.image}
            source={require('./android/app/src/assets/images/pumpkinparty.png')}
          />
          <Text style={styles.intro}>
            You are the Nobody and the New World Order has captured your soul!
          </Text>
          <Text style={styles.subsubheading}>
            You will save the World by ripping your own Soul back out of the
            hands of the NWO!
          </Text>
          <Text style={styles.subsubheading}>
            Move through hostile territory by completing challenges and
            navigating your way to the NWO's headquarters.
          </Text>
          <Text style={styles.subheading}>First Challenge</Text>
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
            <View></View>
          </LinearGradient>
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
  image: {
    borderRadius: 150,
    borderColor: 'white',
    borderWidth: 2,
    margin: 15,
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
    padding: 6,
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

export default IntroGameScreen;
