import {View, FlatList} from 'react-native';
import React from 'react';
import comments from '../../data/comments.json';
import Comments from '../../components/Comments';
import Input from './Input';

const CommentScreen = () => {
  return (
    <View style={{flex:1}}>
      <FlatList
        style={{padding: 10}}
        data={comments}
        renderItem={({item}) => (
          <Comments comment={item} includeDetails={true} />
        )}
      />
      <Input />
    </View>
  );
};

export default CommentScreen;
