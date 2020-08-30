import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../lib/useInput';
import { LOG_IN_REQUEST } from '../reducer/user';

const ButtonWrap = styled.div`
  margin-top: 10px;
`;

const FormWrap = styled(Form)`
  padding: 10px;
`;
const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { logInLoading } = useSelector((state) => state.users);

  const onSubmitLogin = useCallback(() => {
    console.log(email, password);
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password },
    });
    // 1. id, password를 적고 로그인 시도시 LogInRequestAction을 디스패치
    // 2. reducer/user의 함수 참조
  }, [email, password]);

  return (
    <FormWrap onFinish={onSubmitLogin}>
      <div>
        <label htmlFor="user-eamill">이메일</label>
        <br />
        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
      </div>
      <ButtonWrap>
        <Button type="primary" htmlType="submit" loading={logInLoading}>Login</Button>
        <Link href="/signup"><Button type="dashed">회원 가입</Button></Link>
      </ButtonWrap>
    </FormWrap>
  );
};

export default LoginForm;
