import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {View, Text, StyleSheet, Button} from 'react-native';

import CustomButton from './android/app/src/components/CustomButton';

function RealHelpScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Real Help Screen</Text>
      <LinearGradient
        colors={['orange', '#3EB489', '#246EE9', 'black']}
        style={styles.linearGradient}>
        <CustomButton>RAGEFUL</CustomButton>
        <CustomButton>TERRIFIED</CustomButton>
        <CustomButton>DESPAIR</CustomButton>
        <CustomButton>SUICIDAL</CustomButton>
      </LinearGradient>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
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
  },
  intro: {
    fontSize: 30,
    color: 'orange',
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

export default RealHelpScreen;
