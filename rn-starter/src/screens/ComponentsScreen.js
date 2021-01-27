import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Andrei';

  return (
    <View>
      <Text style={styles.textStyle}>React Native Intro</Text>
      <Text style={styles.subHeaderStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20,
  }
});

export default ComponentsScreen;