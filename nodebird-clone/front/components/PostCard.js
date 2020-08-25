import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Card, Popover, Button, Avatar } from 'antd';
import PropTypes from 'prop-types';
import PostImage from '../components/PostImage';
import {
  RetweetOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  EllipsisOutlined

} from '@ant-design/icons';

const PostCard = ({post}) => {
  const [liked, setLiked] = useState(false);
  const [openedComment, setOpenedComment] = useState(false);

  const onChangeLiked = useCallback(() => {
    setLiked(prev => !prev)
  }, [])
  const onToggleComment = useCallback(() => {
    setOpenedComment(prev => !prev)
  }, [])

  const id  = useSelector(state => state.users.me?.id)

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
          <Popover key="comment" content={(
            <Button.Group>
              { 
              id && id === post.User.id 
              ? <Button>신고</Button>
              : <div>
                <Button>수정</Button>
                <Button>삭제</Button>
                </div>
            }
            </Button.Group>
          )}>
            <EllipsisOutlined key="more" />
          </Popover>
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {openedComment && (
        <div>
          댓글 부분
        </div>
      )}
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.object,
    Images: PropTypes.arrayOf(PropTypes.object),
    Comments: PropTypes.arrayOf(PropTypes.object)
  })
}

export default PostCard
