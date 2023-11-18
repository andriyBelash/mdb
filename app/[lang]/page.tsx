import { Locale }        from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

import HomeSwiper  from '@/components/HomeSwiper'
import CardContent from '@/components/CardContent'

// api called

import { getMoviesPlayingNow, getMoviesPopular } from '@/utils/api/films'

import '@/styles/pages/home.scss'

import { Suspense }   from 'react'


export default async function IndexPage({
    params: { lang },
  }: {
    params: { lang: Locale }
  }) {

  const { page } = await getDictionary(lang)

  const moviesPlayerNow = await getMoviesPlayingNow(lang)
  const popularMovies   = await getMoviesPopular(lang)

  return (
    <div className='page'>
      <div className='container home'>
          <Suspense fallback={<p>Loading feed...</p>}>
            <HomeSwiper message={page} movies={moviesPlayerNow}/>
          </Suspense>

        <CardContent type='movies' message={page} title={page.popular_movies} />
        {/* <CardContent message={page} title={page.popular_series} />
        <CardContent message={page} title={page.popular_people} /> */}
      </div>
    </div>
  )
}
