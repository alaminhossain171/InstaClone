import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '../screens/ProfileScreen';

import EditProfileScreen from '../screens/EditProfileScreen';
import {ProfileStackNavigatorParamList} from '../types/navigation';
const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();
export default function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{title: 'Edit Profile'}}
      />
    </Stack.Navigator>
  );
}
