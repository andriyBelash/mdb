'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@/styles/components/home-swiper.scss'

import Link from 'next/link';
import Image from 'next/image';


const HomeSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop
      autoplay

    >
      <SwiperSlide className='swiper-slide'>
        <Link href='#'>
          <Image
            fill
            src='/preview.png'
            alt='swiper'
            style={{objectFit: "cover"}}
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <Link href='#'>
          <Image
            fill
            src='/preview.png'
            alt='swiper'
            style={{objectFit: "cover"}}
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <Link href='#'>
          <Image
            fill
            src='/preview.png'
            alt='swiper'
            style={{objectFit: "cover"}}
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}

export default HomeSwiper