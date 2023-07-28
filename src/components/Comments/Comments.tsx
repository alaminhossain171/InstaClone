import {View, Text, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import colors from '../../themes/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Icomment} from '../../types/models';
interface IcommentProps {
  comment: Icomment;
  includeDetails: boolean;
}

export default function Comments({
  comment,
  includeDetails = false,
}: IcommentProps) {
  const [isLike, setIsLike] = useState(false);

  function toggleLike() {
    setIsLike(v => !v);
  }
  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}

      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username} </Text>
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={5}>
        <AntDesign
          name={isLike ? 'heart' : 'hearto'}
          size={16}
          style={styles.icon}
          color={isLike ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
}
