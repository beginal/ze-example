import React, { useRef, useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../lib/useInput';
import { addPost } from '../reducer/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [postInput, onChangePostInput, setPostInput] = useInput('');
  const { imagePaths, addPostLoading, addPostDone } = useSelector((state) => state.posts);

  useEffect(() => {
    if (addPostDone) {
      setPostInput('');
    }
  }, [addPostDone]);

  const onSubmitPost = useCallback(() => {
    dispatch(addPost(postInput));
  }, [postInput]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <div>
      <Form
        style={{ marginTop: '10px 0 20px' }}
        encType="multipart/form-data"
        onFinish={onSubmitPost}
      >
        <Input.TextArea maxLength={140} value={postInput} onChange={onChangePostInput} placeholder="오늘 하루는 어땟나요?" />
        <div>
          <input type="file" multiple hidden ref={imageInput} />
          <Button onClick={onClickImageUpload}>이미지 업로드</Button>
          <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={addPostLoading}>글쓰기</Button>
        </div>
        <div>
          {imagePaths && imagePaths.map((v) => (
            <div key={v} style={{ display: 'inline-block' }}>
              <img src={v} style={{ width: '200px' }} alt={v} />
              <Button>제거</Button>
            </div>
          ))}
        </div>
      </Form>
    </div>
  );
};

export default PostForm;
