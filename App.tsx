import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import fonts from './src/themes/fonts';
import colors from './src/themes/colors';

const App = () => {
  return (
    <View style={styles.post}>
      {/* header  */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://image.khaleejtimes.com/?uuid=4faf1101-9f96-5c0e-9942-2e1c00b538f8&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.84375&x=0&y=0&width=1200&height=675',
          }}
          style={styles.userAvater}
        />
        <Text style={styles.userName}>iamsrk </Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* content  */}
      <Image
        source={{
          uri: 'https://image.khaleejtimes.com/?uuid=4faf1101-9f96-5c0e-9942-2e1c00b538f8&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.84375&x=0&y=0&width=1200&height=675',
        }}
        style={styles.image}
      />
      {/* footer  */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
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
          and <Text style={styles.bold}>66 others </Text>
        </Text>

        {/* post description  */}
        <Text style={styles.text}>
          <Text style={styles.bold}>aalamin_20 </Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut ad
          asperiores perferendis voluptates molestias pariatur blanditiis fuga
          atque modi, necessitatibus dignissimos dolores fugiat commodi
          accusantium, cupiditate dolorum nam? Sint.
        </Text>

        {/* comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>aalamin_20 </Text>
            Lorem ipsum dolor sit pariatur
          </Text>
          <AntDesign
            name={'hearto'}
            size={16}
            style={styles.icon}
            color={colors.black}
          />
        </View>
        {/* posted date  */}
        <Text>21 July, 2023</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  userAvater: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  commentText: {
    flex: 1,
    color: colors.black,
    lineHeight: 18,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
