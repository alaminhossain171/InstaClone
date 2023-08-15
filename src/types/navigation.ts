import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

export type RootNavigatorParamList = {
  Home: undefined;
  Comments: {postId: string};
  Auth: undefined;
  EditProfile: undefined;
};

export type BottomTabNavigatorParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: undefined;
};

export type HomeStackNavigatorParamList = {
  Feed: undefined;
  UserProfile: NavigatorScreenParams<ProfileStackNavigatorParamList>;
  UpdatePost: {id: string};
  PostLikes: {id: string};
};

export type ProfileStackNavigatorParamList = {
  Profile: {userId: string};
  'Edit Profile': undefined;
  UserFollow: {
    id: string;
  } & NavigatorScreenParams<RootNavigatorParamList>;
};

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Feed'
>;
export type ProfileNavigatiorProp = NativeStackNavigationProp<
  ProfileStackNavigatorParamList,
  'Profile'
>;
