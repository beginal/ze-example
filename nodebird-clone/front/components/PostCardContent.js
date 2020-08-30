import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({ postData }) => (
  <div>
    {postData.split(/(#[^\s#]+)/g).map((v) => {
      // 정규표현식 어떻게 표현되는지는 regexr을 참고 /g는 전체
      if (v.match(/(#[^\s#]+)/)) {
        // 위에 해당되는 내용이 하나라도 일치되면
        return <Link href={`/hashtag/${v.slice(1)}`} key={v}><a>{v}</a></Link>;
      }
      return v;
    })}
  </div>
);

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
