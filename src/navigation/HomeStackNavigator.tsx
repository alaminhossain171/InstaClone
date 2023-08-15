import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import logo from '../assets/images/logo.png';
import {Image} from 'react-native';
import {HomeStackNavigatorParamList} from '../types/navigation';
const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();
export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={HomeScreen}
        options={{headerTitle: Header, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
}

function Header() {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{height: 40, width: 150}}
    />
  );
}
const styles = StyleSheet.create({});
