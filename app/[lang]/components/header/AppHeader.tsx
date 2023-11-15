import '@/styles/components/header.scss'

import Image from 'next/image'
import Link from 'next/link'

import LocaleSwitcher from './LocaleSwitcher'
import HeaderLinks    from './HeaderLinks'
import UserBlock      from './UserBlock'
import { getDictionary } from '../../../../get-dictionary'

const header = async ({ lang }: { lang: 'uk'| 'en' }) => {
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
          <UserBlock message={header}/>
          <LocaleSwitcher/>
        </div>
      </div>
    </header>
  )
}

export default header