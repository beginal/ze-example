import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const index = () => {
  const { me } = useSelector((state) => state.users);
  const { mainPosts } = useSelector((state) => state.posts);
  return (
    <AppLayout>
      {me && <PostForm /> }
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
};

export default index;
