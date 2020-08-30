import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ImagesZoom from './ImagesZoom';

const PostImage = ({ images }) => {
  const [photoZoom, setPhotoZoom] = useState(false);

  const onPhotoZoomOpen = useCallback(() => {
    setPhotoZoom(true);
  }, []);
  const onPhotoZoomClose = useCallback(() => {
    setPhotoZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img src={images[0].src} alt={images[0].src} />
      </>
    );
  } if (images.length === 2) {
    return (
      <>
        <img src={images[0].src} alt={images[0].src} />
        <img src={images[1].src} alt={images[1].src} />
      </>
    );
  }
  return (
    <>
      <div>
        <img style={{ width: '50%' }} src={images[0].src} alt="" />
        <div
          onClick={onPhotoZoomOpen}
          role="presentation"
          style={{
            display: 'inline-block',
            width: '50%',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
        >
          {images.length - 1}개의 사진 더보기
        </div>
      </div>
      {photoZoom && <ImagesZoom images={images} onZoom={onPhotoZoomClose} />}
    </>
  );
};

PostImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string })).isRequired,
};

export default PostImage;
