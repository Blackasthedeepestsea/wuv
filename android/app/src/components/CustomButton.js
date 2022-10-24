import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';

const CustomButton = ({children, onPress, mode, style}) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <View style={[styles.container, mode === 'flat' && styles.flat]}>
          <Text style={[styles.title, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  flat: {
    backgroundColor: 'transparent',
  },
  flatText: {
    color: 'green',
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: 'orange',
    borderRadius: 20,
  },
});
