import { Locale }        from '@/i18n-config'
import { getTrending }   from "@/utils/api/others"

import { Suspense } from 'react'

import '@/styles/pages/trending.scss'

import TrendingCard       from '@/components/Card/TrendingJointCard'
import TrendingMediaCard  from '@/components/Card/TrendingMediaCard'
import TrendingPersonCard from '@/components/Card/TrendingPersonCard'

import AppPagination from '@/components/Ui/AppPagination'

type Params = {
  params: { lang: Locale, type: string },
  searchParams?: { page?: string }
}
const page = async ({ params: { lang, type }, searchParams }: Params ) => {

  const currentPage = Number(searchParams?.page) || 1;

  const trending = await getTrending('day', type, lang, currentPage)

  return (
    <div className='trending'>
      <div className='trending-header'></div>
      <div className="trending-cards">
      {trending.results.map(i => (
        type === 'all' ? <TrendingCard item={i} key={i.id} /> :
        ['movie', 'tv'].includes(type) ? <TrendingMediaCard item={i} key={i.id} /> :
        type === 'person' ? <TrendingPersonCard item={i} key={i.id} /> :
        null
      ))}
      </div>
      <AppPagination currentPage={currentPage} pages={100}/>
    </div>
  )
}

export default page