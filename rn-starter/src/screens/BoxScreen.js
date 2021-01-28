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
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // margin: 20,
    // marginVertical: 20,
    // marginHorizontal: 20,
    flex: 1,
    // position: 'absolute',
    // top: 10,
    // bottom: 10,
    // left: 10,
    // right: 10,
  }
});

// flexbox defaults

// parent
// alignItems: 'stretch'
// flexDirection: 'column'
// justifyContent: 'flex-start'

// child
// flex:
// alignSelf: 'stretch'

// element to fill container
// position: 'absolute'
// top: 0,
// bottom: 0,
// left: 0,
// right: 0,
// - or the shortcut -
//...StyleSheet.absoluteFillObject

export default BoxScreen;