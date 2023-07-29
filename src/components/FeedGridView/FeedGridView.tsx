import {FlatList, Image} from 'react-native';
import React from 'react';
import {Ipost} from '../../types/models';
import FeedGridItem from './FeedGridItem';
interface IFeedGridView {
  data: Ipost[];
  ListHeaderComponent?: any;
}
const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      showsVerticalScrollIndicator={false}
      data={data}
      numColumns={3}
      renderItem={({item}) => <FeedGridItem post={item} />}
      style={{marginHorizontal: -1}}
    />
  );
};

export default FeedGridView;
