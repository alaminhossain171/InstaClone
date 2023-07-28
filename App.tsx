import {View} from 'react-native';
import React from 'react';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentScree from './src/screens/CommentScreen/CommentScreen';
import CommentScreen from './src/screens/CommentScreen/CommentScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <HomeScreen /> */}
      <CommentScreen />
    </View>
  );
};

export default App;
