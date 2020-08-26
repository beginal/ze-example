import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, Form, Button } from 'antd';

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const [commentForm , setCommentForm] = useState('');

  const { isLoggedIn  } = useSelector(state => state.users)

  const onChangeComment = e => {
    setCommentForm(e.target.value)
  }
  const onSubmitComment = () => {
    dispatch()
    setCommentForm("")
  }

  return (
    <div>
      <Form style={{display:'inline'}} onFinish={onSubmitComment}>
        {isLoggedIn && 
        <Form.Item>
        <Input.TextArea value={commentForm} rows={4} onChange={onChangeComment} placeholder="바르고 좋은 댓글문화 만들어요" />
        <Button type="primary" htmlType="submit">입력</Button>
        </Form.Item>
        }        
      </Form>
    </div>
  )
}

CommentForm.propTypes = {
  post : PropTypes.object.isRequired
}

export default CommentForm
