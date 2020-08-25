import React from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Col, Row } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const MenuSearch = styled(Input.Search)`
  vertical-align:middle;
`;

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector(state => state.users)
  // reducer의 state값을 가져온다.

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
          {isLoggedIn ? <UserProfile/> : <LoginForm/>}
        </Col>
      </Row>
    </>

  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;
