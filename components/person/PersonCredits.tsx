'use client'
import React, { useState, useEffect, useRef } from 'react';
import type { IPersonCredits } from '@/types/person';
import { FaCircleInfo } from "react-icons/fa6";

import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import PersonCreditItem from './PersonCreditItem';


type PropsType = {
  credits: IPersonCredits,
  message: any
}

const PersonCredits = ({ credits, message }: PropsType) => {
  const [isFilmsOpen, setFilmsOpen] = useState<boolean>(false);
  const [isTvOpen, setTvOpen]       = useState<boolean>(false);

  const movie = useRef<HTMLDivElement>(null)
  const tvShow = useRef<HTMLDivElement>(null)

  const films = credits.cast.filter((cast) => cast.release_date)
  const tv = credits.cast.filter((cast) => cast.first_air_date)

  const sortedFilms = films.sort((a, b) => {
    if (a.release_date && b.release_date) {
      return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
    }
    return 0;
  });

  const sortedTv = tv.sort((a, b) => {
    if (a.first_air_date && b.first_air_date) {
      return new Date(b.first_air_date).getTime() - new Date(a.first_air_date).getTime();
    }
    return 0;
  });


  return (
    <div className='mt-5 w-full'>
      <div>
        <div className='border-b cursor-pointer border-primary text-primary text-l mt-5 pb-2 flex items-center justify-between' onClick={() => setFilmsOpen(!isFilmsOpen)}>
          <div> {message.movies} <span className='text-grey'>{sortedFilms.length}</span></div>
          <button>{isFilmsOpen ? <IoIosArrowUp color="white"/> : <IoIosArrowDown color="white"/>}</button>
        </div>
        <div ref={movie} className={`accordion-section ${isFilmsOpen ? 'open' : ''}`}>
          {isFilmsOpen && sortedFilms.map(movie => (<PersonCreditItem key={movie.id} cast={movie}/>))}
        </div>
      </div>

      <div>
        <div className='border-b border-primary cursor-pointer text-primary text-l mt-5 pb-2 flex items-center justify-between' onClick={() => setTvOpen(!isTvOpen)}>
          <div> {message.tv_show} <span className='text-grey'>{sortedTv.length}</span></div>
          <button>{isTvOpen ? <IoIosArrowUp color="white"/> : <IoIosArrowDown color="white"/>}</button>
        </div>
        <div ref={tvShow} className={`accordion-section ${isTvOpen ? 'open' : ''}`}>
          {isTvOpen && sortedTv.map(tv => (<PersonCreditItem key={tv.id} cast={tv}/>))}
        </div>
      </div>
    </div>
  )
}

export default PersonCredits