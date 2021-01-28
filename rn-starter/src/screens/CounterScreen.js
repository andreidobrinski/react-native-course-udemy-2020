import React, { useState, useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreenReduce = () => {
  const [state, dispatch] = useReducer(
    reducer,
    { count: 0 }
  );

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'increment', payload: 1 })}
      />
      <Button
        title="Decreate"
        onPress={() => dispatch({ type: 'increment', payload: 1 })}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        title="Decreate"
        onPress={() => setCounter(counter - 1)}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;