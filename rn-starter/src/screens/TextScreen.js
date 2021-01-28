import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
      <Text>My name is: {name}</Text>
      {name.length < 4 ? <Text>Text is less than 4 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
