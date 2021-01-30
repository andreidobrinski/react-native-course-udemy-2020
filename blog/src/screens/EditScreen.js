import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam('id');

  const blogPost = state.find(blogPost => blogPost.id === id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Edit Title:</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text>Edit Content:</Text>
      <TextInput
        value={content}
        onChangeText={text => setContent(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;