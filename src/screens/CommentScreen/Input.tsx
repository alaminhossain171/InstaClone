import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const Input = () => {
  const [commentText, setCommentText] = useState('');

  function onPost() {
    console.warn('posting comment ', commentText);
    setCommentText('');
  }
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://www.looper.com/img/gallery/the-ending-of-deadpool-explained/intro-1614440001.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        value={commentText}
        onChangeText={setCommentText}
        placeholder="Write your comment..."
        style={styles.input}
        multiline
      />

      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
    paddingRight: 50,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },
});
