import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

function FormInput({label, textInputConfig}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 5,
  },
  label: {
    color: 'black',
    padding: 4,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    color: 'black',
    backgroundColor: 'white',
    marginVertical: 8,
    fontSize: 18,
    padding: 4,
    fontWeight: 'bold',
  },
});

export default FormInput;
