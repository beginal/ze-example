import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, Button } from 'antd';
import styled from 'styled-components';

const ProfileImage = styled(Card)`
  width:300px;
`

const UserProfile = ({ setIsLoggedIn }) => {

    const OnSubmitLogout = useCallback(() => {
      setIsLoggedIn(false);
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

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.elementType.isRequired,
}

export default UserProfile
