/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

const App = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>This Is We Wuv! What up?</Text>
      <Button
        onPress={() => Alert.alert('Simple Button pressed')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
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
  },
});

export default App;
