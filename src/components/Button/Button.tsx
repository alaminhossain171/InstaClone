import {View, Text, Pressable} from 'react-native';
import React from 'react';
import { styles } from './Styles';
interface IButton {
  text?: string;
  onPress?: () => void;
}
export default function Button({text = '', onPress = () => {}}: IButton) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
