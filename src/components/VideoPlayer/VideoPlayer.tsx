import React, {useState} from 'react';
import Video from 'react-native-video';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../themes/colors';

interface IVideoPlayer {
  uri: String;
  paused: boolean;
}
const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);
  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        repeat
        resizeMode="cover"
        muted={muted}
        paused={true||paused}
      />
      <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color={'white'}
        />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 25,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
