import { Locale }        from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher    from './LocaleSwitcher'
import ProfileBLock      from './ProfileBlock'

import '@/styles/components/header.scss'

export default async function Header({ lang }: { lang: Locale }) {
  const { action } = await getDictionary(lang)
  return (
    <header>
      <nav className='flex flex-between'>
        <ProfileBLock message={action} lang={lang}/>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}
