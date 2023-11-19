'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

import 'swiper/css';
import '@/styles/components/home-swiper.scss'

import Link   from 'next/link';

import { URL_IMAGE } from '@/utils/constants/tmdb';

import type { INowPlayers } from '@/types/films';

type PropType = {
  movies: INowPlayers,
  message: any
}

const HomeSwiper = ({ movies, message }: PropType) => {
  return (
    <>
      <h2 className='title home-swiper-title'>{message.now_in_rental}: {movies.dates.minimum} - {movies.dates.maximum}</h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        slidesPerGroup={1}
        centeredSlides
        loop
        autoplay
        breakpoints={{
          639.98: {
            slidesPerView: 3,
            slidesPerGroup: 1
          }
        }}
      >
          { movies.results.map((movie, index) => (
            <SwiperSlide key={index} className='swiper-slide'>
                <Link href={`/movie/${movie.id}`} >
                  <Image
                    src={`${URL_IMAGE}${movie.poster_path}`}
                    fill
                    alt={movie.title}
                  />
                </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>

  )
}

export default HomeSwiper