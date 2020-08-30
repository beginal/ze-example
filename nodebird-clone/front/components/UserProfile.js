import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducer/user';

const ProfileImage = styled(Card)`
  width:300px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { logOutLoading, me } = useSelector((state) => state.users);

  const OnSubmitLogout = useCallback(() => {
    dispatch({ type: LOG_OUT_REQUEST });
  }, []);

  return (
    <div>
      <ProfileImage
        cover={(
          <img
            alt="nodeBird"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        )}
        actions={[
          <div key="twic">게시글 <br /> {me.Posts.length}</div>,
          <div key="followings">팔로잉 <br /> {me.Followings.length}</div>,
          <div key="followers">팔로워 <br /> {me.Followers.length}</div>,
        ]}
      >

        <Card.Meta
          avatar={<Avatar>{me.nickname[0]}</Avatar>}
          title={me.nickname}
          description="NodeBird"
        />
        <Button onClick={OnSubmitLogout} loading={logOutLoading}>Log Out</Button>
      </ProfileImage>
    </div>
  );
};

export default UserProfile;
