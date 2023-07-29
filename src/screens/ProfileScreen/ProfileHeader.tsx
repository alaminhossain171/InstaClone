import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import user from '../../data/user.json';
import Button from '../../components/Button';
export default function ProfileHeader() {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{uri: user.image}} style={styles.avatar} />

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>198</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>298</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => console.warn('edit profile')}
        />
        <Button
          text="Share Profile"
          onPress={() => console.warn('Share profile')}
        />
      </View>
    </View>
  );
}