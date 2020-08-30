import React from 'react';
import { useSelector } from 'react-redux';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import AppLayout from '../components/AppLayout';

const profile = () => {
  const { me } = useSelector((state) => state.users);

  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="팔로잉" data={me.Followings} />
      <FollowList header="팔로워" data={me.Followers} />
    </AppLayout>
  );
};

export default profile;
