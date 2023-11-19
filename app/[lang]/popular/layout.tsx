import PageTabs from "@/components/Ui/PageTabs"

import { Locale }        from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'


type PropType = {
  children: React.ReactNode,
  params: { lang: Locale }
}

type Tab = {
  title: string,
  key: string
}

const layout = async ({children, params: { lang }}: PropType) => {
  const { header } = await getDictionary(lang)

  const tabs: Tab[] = [
    {title: header.all, key: 'all'},
    {title: header.movies, key: 'movie'},
    {title: header.tv_show, key: 'tv'},
    {title: header.person, key: 'person'},
  ]

  return (
    <div className="page">
      <div className="container">
        <div className="title-block">
          <h1 className="page-title">В тренді</h1>
          <p className="page-subtitle">Тут ви можете переглянути список популярних фільмів, серіалів та персонажів</p>
        </div>
        <PageTabs
          tabs={tabs}
          mainPath='popular'
        />
        <main className="page-content">{children}</main>
      </div>
    </div>
  )
}

export default layout