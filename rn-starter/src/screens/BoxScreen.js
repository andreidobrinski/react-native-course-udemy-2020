import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>1</Text>
      <Text style={styles.textStyle}>2</Text>
      <Text style={styles.textStyle}>3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // margin: 20,
    // marginVertical: 20,
    // marginHorizontal: 20,
  }
});

export default BoxScreen;