import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { LogOutAction } from '../reducer/user';
const ProfileImage = styled(Card)`
  width:300px;
`

const UserProfile = () => {
    const dispatch = useDispatch();

    const OnSubmitLogout = useCallback(() => {
      dispatch(LogOutAction())
    }, [])

  return (
    <div>
      <ProfileImage
        cover={
          <img 
          alt="nodeBird" 
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" 
          />
        }
        actions={[
          <div key="twic">게시글 <br /> 0</div>,
          <div key="followings">팔로잉 <br /> 0</div>,
          <div key="followers">팔로워 <br /> 0</div>
        ]}
      >

      <Card.Meta 
      avatar={<Avatar>J</Avatar>}
      title="Junho"
      description="NodeBird"
       />
       <Button onClick={OnSubmitLogout}>Log Out</Button>
      </ProfileImage>
    </div>
  )
}

export default UserProfile
