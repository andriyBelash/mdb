'use client'

import { usePathname, useParams } from 'next/navigation'
import { i18n } from '@/i18n-config'

import Link from 'next/link'

const LocaleSwitcher = () => {
  const pathName = usePathname()

  const { lang } = useParams()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  return (
    <ul className='locale-switcher'>
      {i18n.locales.map((locale) => {
        return (
          <li className={`${lang === locale ? 'active' : ''}`} key={locale}>
            <Link href={redirectedPathName(locale)}>{locale}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default LocaleSwitcher