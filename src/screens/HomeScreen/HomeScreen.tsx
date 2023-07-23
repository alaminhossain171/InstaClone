import { FlatList, View } from 'react-native'
import React from 'react'
import FeedPost from '../../components/FeedPost';
import posts from '../../data/Posts.json'



const HomeScreen = () => {


  

  
  return (

      <FlatList
      data={posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=><FeedPost post={item} />}
      />

  )
}

export default HomeScreen