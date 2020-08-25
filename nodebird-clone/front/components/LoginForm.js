import React, { useCallback } from 'react'
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import useInput from '../lib/useInput';
import { LogInAction } from '../reducer/user'

const ButtonWrap = styled.div`
  margin-top: 10px;
`;

const FormWrap = styled(Form)`
  padding: 10px;
`
const LoginForm = () => {

  const dispatch = useDispatch()
  const [id, onChangeId] = useInput('')
  const [password, onChangePassword] = useInput('')

  const onSubmitLogin = useCallback(() => {
    console.log(id,password)
    dispatch(LogInAction(id, password))
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


export default LoginForm
