import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const index = () => {
  const { isLoggedIn } = useSelector(state => state.users); 
  const { mainPosts } = useSelector(state => state.posts); 
  return (
      <AppLayout>
        {isLoggedIn && <PostForm /> }
        {mainPosts.map((post, index) => <PostCard key={index} post={post} />)}
      </AppLayout>
  )
}

export default index
