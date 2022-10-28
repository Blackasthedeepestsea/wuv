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
        }}
      />
      <FormInput
        label="E-Mail"
        textInputConfig={{
          keyboardType: 'email-address',
          placeholder: 'booho@boohoo.com',
        }}
      />
      <FormInput label="Password" />
      <FormInput label="Confirm Password" />
    </View>
  );
}

export default Form;
