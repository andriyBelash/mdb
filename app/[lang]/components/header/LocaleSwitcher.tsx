'use client'

import Link from 'next/link'
//@ts-ignore
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className='flex locale-switcher'>
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className={`locale ${pathName.includes(locale) ? 'active' : ''}`}
            >
              {locale}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}