
'use client'
import React from 'react'
import MovieCard from './MovieCard'
import { IMovies } from '@/types/films'
import AppPagination from '@/components/Ui/AppPagination';

type PropsType = {
  movies: IMovies,
  currentPage: string | number
}
const ListBlock = ({movies, currentPage}: PropsType) => {
  return (
    <div className='flex-col'>
      <div className='grid-films'>
        { movies.results.map(movie => (
          <MovieCard key={movie.id}/>
        )) }
      </div>
      <AppPagination currentPage={currentPage as number} pages={100}/>
    </div>


  )
}

export default ListBlock