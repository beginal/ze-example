import React, { useCallback } from 'react'
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import useInput from '../lib/useInput';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrap = styled.div`
  margin-top: 10px;
`;

const FormWrap = styled(Form)`
  padding: 10px;
`
const LoginForm = ({setIsLoggedIn}) => {

  const [id, onChangeId] = useInput('')
  const [password, onChangePassword] = useInput('')

  const onSubmitLogin = useCallback(() => {
    console.log(id,password)
    setIsLoggedIn(true)
  }, [id, password])

  return (
    <FormWrap onFinish={onSubmitLogin}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br/>
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br/>
        <Input name="user-password" value={password} onChange={onChangePassword} required />
      </div>
      <ButtonWrap>
        <Button type="primary" htmlType="submit" loading={false}>Login</Button>
        <Link href="/signup"><Button type="dashed">회원 가입</Button></Link>
      </ButtonWrap>
    </FormWrap>
  )
}

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.elementType.isRequired,
}

export default LoginForm
