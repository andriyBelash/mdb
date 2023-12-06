import { Locale }        from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

import HomeSwiper  from '@/components/HomeSwiper'
import CardContent from '@/components/CardContent'

// api called

import { getMoviesPlayingNow, getMoviesPopular } from '@/utils/api/films'
import { getPopularTvShow } from '@/utils/api/tvShow'
import { getPopularPerson } from '@/utils/api/person'
import '@/styles/pages/home.scss'

import { Suspense }   from 'react'


export default async function IndexPage({
    params: { lang },
  }: {
    params: { lang: Locale }
  }) {

  const { page } = await getDictionary(lang)

  const [moviesPlayerNow, popularMovies, popularTvShow, popularPerson] = await Promise.all([
    getMoviesPlayingNow(lang),
    getMoviesPopular(lang),
    getPopularTvShow(lang),
    getPopularPerson(lang)
  ])

  return (
    <div className='page'>
      <div className='wrapper home'>
        <Suspense fallback={<p>Loading feed...</p>}>
          <HomeSwiper message={page} movies={moviesPlayerNow}/>
        </Suspense>
        <CardContent content={popularMovies} type='movies' message={page} title={page.popular_movies} />
        <CardContent content={popularTvShow} type='tv-show' message={page} title={page.popular_series} />
        <CardContent content={popularPerson} type='person' message={page} title={page.popular_people} />
      </div>
    </div>
  )
}
