import {View} from 'react-native';
import React from 'react';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentScree from './src/screens/CommentScreen/CommentScreen';
import CommentScreen from './src/screens/CommentScreen/CommentScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import ProfileUploadScreen from './src/screens/ProfileUploadScreen.tsx/ProfileUploadScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <HomeScreen /> */}
      {/* <CommentScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <EditProfileScreen /> */}
      <ProfileUploadScreen />
    </View>
  );
};

export default App;
