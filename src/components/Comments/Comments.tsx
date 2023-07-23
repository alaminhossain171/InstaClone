import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import colors from '../../themes/colors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Icomment } from '../../types/models';
interface IcommentProps{
  comment:Icomment
}

export default function Comments({comment}:IcommentProps) {
  return (
    <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>{comment.user.username} {' '}</Text>
           {comment.comment}
          </Text>
          <AntDesign
            name={'hearto'}
            size={16}
            style={styles.icon}
            color={colors.black}
          />
        </View>
  )
}