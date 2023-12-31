import * as React from 'react';

import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';

import BottomTabNavigator from './BottomTabNavigator';
import CommentScreen from '../screens/CommentScreen/CommentScreen';
import {RootNavigatorParamList} from '../types/navigation';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: [
    'instapp://',
    'https://play.google.com/store/games?device=windows',
  ],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments',
      Home: {
        screens: {
          HomeStack: {
            initialRouteName:'Feed',
            screens: {
              UserProfile: 'user/:userId',
            },
          },
        },
      },
    },
  },
};

function Rootstack() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={BottomTabNavigator}
          // options={{headerTitle: Header, headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Comments"
          component={CommentScreen}
          options={{title: 'Comments'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rootstack;
