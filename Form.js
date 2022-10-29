import React from 'react';
import {View} from 'react-native';

import FormInput from './FormInput';

function Form() {
  return (
    <View>
      <FormInput
        label="User Name"
        textInputConfig={{
          placeholder: 'BooHoo',
          maxLength: 20,
        }}
      />
      <FormInput
        label="E-Mail"
        textInputConfig={{
          keyboardType: 'email-address',
          placeholder: 'booho@boohoo.com',
        }}
      />
      <FormInput
        label="Password"
        textInputConfig={{
          placeholder: '***********',
        }}
      />
      <FormInput
        label="Confirm Password"
        textInputConfig={{
          placeholder: '***********',
        }}
      />
    </View>
  );
}

export default Form;
