import React from 'react';
import {Text, TextInput, View} from 'react-native';

function FormInput({label, textInputConfig}) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

export default FormInput;
