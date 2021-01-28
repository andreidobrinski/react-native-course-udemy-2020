import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate }}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigate('Components')}
      />
      <TouchableOpacity
        onPress={() => navigate('List')}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button
        title="Go to Image Demo"
        onPress={() => navigate('Image')}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigate('Counter')}
      />
      <Button
        title="Go to Colour Demo"
        onPress={() => navigate('Colour')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigate('Square')}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigate('Text')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
