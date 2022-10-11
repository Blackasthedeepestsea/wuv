import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log("Haha I'm about to be button")}
      style={styles.container}>
      <Text style={styles.title}> Begin Healing With Us </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 20,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
