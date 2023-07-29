import {View} from 'react-native';
import React from 'react';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentScree from './src/screens/CommentScreen/CommentScreen';
import CommentScreen from './src/screens/CommentScreen/CommentScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <HomeScreen /> */}
      {/* <CommentScreen /> */}
      <ProfileScreen />
    </View>
  );
};

export default App;
