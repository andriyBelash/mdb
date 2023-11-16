import { Locale } from '@/i18n-config'
import HomeSwiper from './components/HomeSwiper'
import CardContent from './components/CardContent'

import '@/styles/pages/home.scss'


export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {

  return (
    <div className='page'>
      <div className='container home'>
        <HomeSwiper/>
        <CardContent/>
      </div>
    </div>
  )
}
