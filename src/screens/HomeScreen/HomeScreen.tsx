import {FlatList, ViewToken} from 'react-native';
import React, {useRef, useState} from 'react';
import FeedPost from '../../components/FeedPost';
import posts from '../../data/Posts.json';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<String | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id); // Get the index of the first viewable item
      }
    },
  );
  return (
    <FlatList
      data={posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <FeedPost post={item} isVisible={activePostId === item.id} />
      )}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default HomeScreen;
