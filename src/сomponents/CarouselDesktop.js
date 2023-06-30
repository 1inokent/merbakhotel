import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';

import styles from './CarouselDesktop.module.css';

import { EffectFlip, Pagination, Navigation } from 'swiper';

const swiperCardOptions = {
  allowSlideNext: true, // Отключает переключение к следующему слайду
  allowSlidePrev: true, // Отключает переключение к предыдущему слайду
  allowTouchMove: true, // Отключает свайп
  loop: true, // Включает зациклиность слайдера
  pagination: true, // Включает кнопки пагинации
  grabCursor: true,
  // navigation: true,
};

export default function CarouselDesktop({ images, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionBox}>{description}</div>
      <Swiper
        {...swiperCardOptions}
        effect={'flip'}
        modules={[EffectFlip, Pagination, Navigation]}
        className={styles.swiper}
      >
        {images.map((img) => (
          <SwiperSlide className={styles.swiperSlide}>
            <img src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
