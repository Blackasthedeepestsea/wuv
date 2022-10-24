import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {View, Text, Button} from 'react-native';

import CustomButton from './android/app/src/components/CustomButton';
function SplashScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}

export default SplashScreen;
