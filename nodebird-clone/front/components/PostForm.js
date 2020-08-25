import React, { useRef, useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addedPosted } from '../reducer/post';


const PostForm = () => {

  const dispatch = useDispatch()
  const imageInput = useRef();
  const [postInput, setPostInput] = useState('')
  const { imagePaths } = useSelector(state => state.posts);
  
  const onChangePostInput = useCallback(e => {
    setPostInput(e.target.value)
  }, [])
  
  const onSubmit = useCallback(() => {
    dispatch(addedPosted)
    setPostInput("")
  }, [])
  
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click()
  }, [imageInput.current])

  return (
    <div>
      <Form 
      style={{ marginTop:"10px 0 20px" }} 
      encType="multipart/form-data" 
      onFinish={onSubmit}
      >
      <Input.TextArea maxLength={140} value={postInput} onChange={onChangePostInput} placeholder="오늘 하루는 어땟나요?" />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{float: 'right' }} htmlType="submit">글쓰기</Button>
      </div>
      <div>
      {imagePaths && imagePaths.map(v => (
        <div key={v} style={{ display: "inline-block"}}>
          <img src={v} style={{ width: "200px"}} alt={v} />
        </div>
      ))}
      <Button>제거</Button>
      </div>
      </Form>      
    </div>
  )
}

export default PostForm;
