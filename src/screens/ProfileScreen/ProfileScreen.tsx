/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import user from '../../data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';

export default function ProfileScreen({route}:any) {
  const {userId}=route?.params||{};
  console.warn(userId);
  return (
    <FeedGridView data={user.posts} ListHeaderComponent={<ProfileHeader />} />
  );
}
