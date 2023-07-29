import {Image, View} from 'react-native';
import React from 'react';
import {Ipost} from '../../types/models';
import colors from '../../themes/colors';
import MatarialIcons from 'react-native-vector-icons/MaterialIcons';

const FeedGridItem = ({post}: {post: Ipost}) => {
  return (
    <View style={{flex: 1, padding: 1, aspectRatio: 1, maxWidth: '33.33%'}}>
      <Image source={{uri: post.image || post?.images[0]}} style={{flex: 1}} />
      {post.images && (
        <MatarialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={{position: 'absolute', top: 5, right: 5}}
        />
      )}
    </View>
  );
};

export default FeedGridItem;
