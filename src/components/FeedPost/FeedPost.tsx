/* eslint-disable react-native/no-inline-styles */
import {Image, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../themes/colors';
import {styles} from './Styles';
import Comments from '../Comments';
import {Ipost} from '../../types/models';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProp} from '../../types/navigation';
interface IFeedPost {
  post: Ipost;
  isVisible: boolean;
}

const FeedPost = ({post, isVisible}: IFeedPost) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const navigation = useNavigation<FeedNavigationProp>();

  const toggleDescription = () => {
    setShowDescription(description => !description);
  };
  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  function navigateUser() {
    navigation.navigate('UserProfile', {userId: post.user.id});
  }

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  }
  if (post.images) {
    content = <Carousel images={post.images} toggleLike={toggleLike} />;
  }
  if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }
  return (
    <View style={styles.post}>
      {/* header  */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvater}
        />
        <Text onPress={navigateUser} style={styles.userName}>
          {post.user.username}{' '}
        </Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* content  */}

      {content}

      {/* footer  */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>amir_hossain2002 </Text>
          and <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        {/* post description  */}
        <Text style={styles.text} numberOfLines={showDescription ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username} </Text>
          {post.description}
        </Text>
        <Text onPress={toggleDescription}>
          {showDescription ? 'less' : 'more'}
        </Text>

        {/* comments */}
        <Text
          onPress={() => navigation.navigate('Comments', {postId: post.id})}>
          View all {post.nofComments} comments
        </Text>
        {post.comments.map(comment => {
          return <Comments key={comment.id} comment={comment} />;
        })}

        {/* posted date  */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
