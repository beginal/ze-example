import React from 'react'
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import AppLayout from '../components/AppLayout';
const profile = () => {
  const followingList = [
    {nickname:"제로초"},{nickname:"부기초"},{nickname:"거북초"}
  ]
  const followerList = [
    {nickname:"제로초"},{nickname:"부기초"},{nickname:"거북초"}
  ]
  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowList header="팔로워 목록" data={followerList} />
    </AppLayout>
  )
}

export default profile;
