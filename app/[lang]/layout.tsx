import { i18n }    from '@/i18n-config'
import { Poppins } from 'next/font/google'

import { useProfileStore } from '@/store/profile'

import AppHeader       from '@/components/Header/AppHeader'
import MobileAppHeader from '@/components/Header/MobileAppHeader'
import ScrollToTop     from '@/components/Ui/ScrollToTop'


import '@/styles/global.scss'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: 'en' | 'en' }
}) {
  const user = await useProfileStore.getState().getProfile();

  return (
    <html lang={params.lang}>
      <body className={poppins.className}>
        <div className='main'>
          <AppHeader user={user} lang={params.lang}/>
          <MobileAppHeader user={user} lang={params.lang}/>

          {children}
          <ScrollToTop/>
        </div>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'MDB',
  description: 'How to do i18n in Next.js 13 within app directory',
}
