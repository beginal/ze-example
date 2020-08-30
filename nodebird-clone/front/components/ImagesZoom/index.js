import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
// 슬릭 슬라이드 만드는 라이브러리
import { Global, ZoomWrap, Header, CloseBtn, SlickWrap, ImageWrap, Indicator } from './style';
// styled를 분해해서 다른 컴포넌트에서 끌어다 씀

const ImageZoom = ({ images, onZoom }) => {
  const [currentSlice, setCurrentSlice] = useState(0);
  return (
    <ZoomWrap>
      <Global />
      <Header>
        <h1>Title</h1>
        <CloseBtn onClick={onZoom}>X</CloseBtn>
      </Header>
      <SlickWrap>
        <div>
          <Slick
            initialSlide={0}
            beforeChange={(slide) => setCurrentSlice(slide)}
            infinite
            arrows={false}
            slideToShow={1}
            slideToScroll={1}
          >
            {images.map((v) => (
              <ImageWrap key={v.src}>
                <img src={v.src} alt={v.src} />
              </ImageWrap>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentSlice + 1}
              {' '}
              /
              {' '}
              {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrap>
    </ZoomWrap>
  );
};

ImageZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string })).isRequired,
  onZoom: PropTypes.func.isRequired,
};

export default ImageZoom;
