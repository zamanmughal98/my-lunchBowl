/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

import img1 from '../../images/1.webp';
import img2 from '../../images/2.webp';
import img3 from '../../images/3.webp';
import img4 from '../../images/4.webp';
import img5 from '../../images/5.webp';
import img6 from '../../images/6.webp';
import {
  FlexContainerW80,
  SliderButton,
  BannerImageContainer,
} from '../../css';

export const ImagesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [img1, img2, img3, img4, img5, img6];
  const totalSlides = images.length;
  const slidesToShow = 3;

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const renderSlides = () => {
    const startIndex = currentSlide;
    const endIndex = (currentSlide + slidesToShow - 1) % totalSlides;

    if (endIndex >= startIndex) {
      return images.slice(startIndex, endIndex + 1);
    } else {
      return [...images.slice(startIndex), ...images.slice(0, endIndex + 1)];
    }
  };

  return (
    <FlexContainerW80>
      <SliderButton onClick={goToPreviousSlide}>&lt;</SliderButton>
      {renderSlides().map((image, index) => (
        <BannerImageContainer
          height={'15rem'}
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
      <SliderButton onClick={goToNextSlide}>&gt;</SliderButton>
    </FlexContainerW80>
  );
};
