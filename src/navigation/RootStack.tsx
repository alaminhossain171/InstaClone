
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';

import BottomTabNavigator from './BottomTabNavigator';
import CommentScreen from '../screens/CommentScreen/CommentScreen';
import { RootNavigatorParamList } from '../types/navigation';



const Stack = createNativeStackNavigator<RootNavigatorParamList>();

function Rootstack() {
  return (
    <NavigationContainer>
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
