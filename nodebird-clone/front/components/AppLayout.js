import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Col, Row } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import styled from 'styled-components';


const MenuSearch = styled(Input.Search)`
  vertical-align:middle;
`;

const AppLayout = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>홈</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <MenuSearch placeholder="검색어를 입력하세요" enterButton />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          Left
        </Col>
        <Col xs={24} md={12}>
      {children}
        </Col>
        <Col xs={24} md={6}>
          {isLoggedIn 
          ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> 
          : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        </Col>
      </Row>
    </>

  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;
