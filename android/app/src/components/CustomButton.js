import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}> LOSING IT: ANGER STYLE</Text>
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
