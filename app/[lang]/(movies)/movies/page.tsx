import React from 'react'
import FilterBlock from '@/components/Movie/FilterBlock'
import ListBlock from '@/components/Movie/ListBlock'
import { getDiscover } from '@/utils/api/films';

type PropsType = {
  searchParams?: { [key: string]: string | string[] | undefined };
  params: { lang: string }
}

const page = async ({searchParams, params: { lang }}: PropsType) => {

  const currentPage = Number(searchParams?.page) || 1;


  const params = {...searchParams, page: currentPage.toString(), language: lang}
  const movies = await getDiscover(params)

  return (
    <div className='page'>
      <div className='wrapper flex items-start gap-2'>
        <FilterBlock/>
        <ListBlock currentPage={currentPage} movies={movies}/>

      </div>
    </div>
  )
}

export default page