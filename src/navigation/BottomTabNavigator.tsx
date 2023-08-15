/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileUploadScreen from '../screens/ProfileUploadScreen.tsx/ProfileUploadScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../themes/colors';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackScreen';
import { BottomTabNavigatorParamList } from '../types/navigation';
const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
        // tabBarInactiveTintColor:'green'
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={ProfileUploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
