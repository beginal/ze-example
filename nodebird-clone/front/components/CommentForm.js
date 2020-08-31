import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, Form, Button } from 'antd';
import { ADD_COMMENT_REQUEST } from '../reducer/post';
import useInput from '../lib/useInput';

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const [commentText, onChangeComment, setCommentText] = useInput('');

  const id = useSelector((state) => state.users.me?.id);
  const { me } = useSelector((state) => state.users);
  const { addCommentDone, addCommentLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id },
    });
  }, [commentText, id]);

  return (
    <div>
      <Form style={{ display: 'inline' }} onFinish={onSubmitComment}>
        {me
        && (
        <Form.Item>
          <Input.TextArea value={commentText} rows={4} onChange={onChangeComment} placeholder="바르고 좋은 댓글문화 만들어요" />
          <Button type="primary" htmlType="submit" loading={addCommentLoading}>입력</Button>
        </Form.Item>
        )}
      </Form>
    </div>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
