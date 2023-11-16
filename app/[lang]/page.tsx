import { Locale }        from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

import HomeSwiper  from './components/HomeSwiper'
import CardContent from './components/CardContent'

import '@/styles/pages/home.scss'


export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {

  const { page } = await getDictionary(lang)

  return (
    <div className='page'>
      <div className='container home'>
        <HomeSwiper/>
        <CardContent message={page} title={page.popular_movies} />
        <CardContent message={page} title={page.popular_series} />
        <CardContent message={page} title={page.popular_people} />
      </div>
    </div>
  )
}
