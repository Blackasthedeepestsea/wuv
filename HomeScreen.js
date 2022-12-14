import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import CustomButton from './android/app/src/components/CustomButton';

function HomeScreen({navigation}) {
  return (
    <LinearGradient
      colors={[
        'black',
        'black',
        'orange',
        '#3EB489',
        '#246EE9',
        'black',
        'black',
      ]}
      style={styles.linearGradient}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.screen}>
            <Image
              style={styles.image}
              source={require('./android/app/src/assets/images/pumpkinparty.png')}
            />
            <Text style={styles.intro}>
              Crawl Out of Hell: Surviving the New World Order
            </Text>
            <Text style={styles.subheading}>
              A game where YOU battle the multi-headed demons of the inner and
              outer dimensions...
            </Text>
            <CustomButton onPress={() => navigation.navigate('LoginScreen')}>
              ENTER THE GAME
            </CustomButton>

            <Text style={styles.subsubheading}>
              If the demons are upon you in real life enter the real help portal
              below...
            </Text>
            <CustomButton onPress={() => navigation.navigate('RealHelpScreen')}>
              Real Help
            </CustomButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
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
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 50,
    borderColor: 'white',
    borderWidth: 2,
  },
  intro: {
    fontSize: 30,
    color: 'red',
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
  },
  subsubheading: {
    fontSize: 18,
    color: 'white',
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

export default HomeScreen;
