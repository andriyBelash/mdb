import '@/styles/components/header.scss'

import Image from 'next/image'
import Link from 'next/link'

import type { IProfile } from '@/types/profile'

import LocaleSwitcher from './LocaleSwitcher'
import HeaderLinks    from './HeaderLinks'
import UserBlock      from './UserBlock'
import { Suspense }   from 'react'

import { getDictionary }   from '@/get-dictionary'

type PropsType = { lang: 'uk'| 'en', user: IProfile | undefined }

const header = async ({ lang, user }: PropsType) => {
  const { header } = await getDictionary(lang)

  return (
    <header className='header'>
      <div className='header-container container'>
        <Link href={'/'}>
          <Image
            width={40}
            height={40}
            src='/logo.svg'
            alt='logo'
          />
        </Link>
        <HeaderLinks message={header}/>
        <div className='header-flex-end'>
          <Suspense fallback={<p>Loading feed...</p>}>
            <UserBlock user={user} message={header}/>
          </Suspense>
          <LocaleSwitcher/>
        </div>
      </div>
    </header>
  )
}

export default header