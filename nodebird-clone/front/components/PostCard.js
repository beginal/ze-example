import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import PropTypes from 'prop-types';

import {
  RetweetOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  EllipsisOutlined,

} from '@ant-design/icons';
import PostImage from './PostImage';
import PostCardContent from './PostCardContent';
import CommentForm from './CommentForm';
import { REMOVE_POST_REQUEST } from '../reducer/post';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [openedComment, setOpenedComment] = useState(false);
  const { removePostLoading } = useSelector((state) => state.posts);
  const onChangeLiked = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setOpenedComment((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  const id = useSelector((state) => state.users.me?.id);

  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImage images={post.Images} />}
        actions={[
          <RetweetOutlined key="Retweet" />,
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="Liked_Two" onClick={onChangeLiked} />
            : <HeartOutlined key="Liked" onClick={onChangeLiked} />,
          <MessageOutlined onClick={onToggleComment} key="Message" />,
          <Popover
            key="comment"
            content={(
              <Button.Group>
                {
              id && post.User.id === id
                ? (
                  <div>
                    <Button>수정</Button>
                    <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                  </div>
                )
                : <Button>신고</Button>
            }
              </Button.Group>
          )}
          >
            <EllipsisOutlined key="more" />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
          // post의 해시태그를 인식하기 위해 컴포넌트 분리
        />
      </Card>
      {openedComment && (
        <div>
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <Comment
                avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                author={item.User.nickname}
                content={item.content}
                actions={[
                  <Button key="comments">덧글</Button>,
                  <Button key="warning">신고</Button>,
                ]}
              />
            )}
          />
          <CommentForm post={post} />
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    Images: PropTypes.arrayOf(PropTypes.object),
    Comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
