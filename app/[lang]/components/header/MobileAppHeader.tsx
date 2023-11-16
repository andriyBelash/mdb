import '@/styles/components/header.scss'
import MobileHeaderContainer from './MobileHeaderContainer'

import LocaleSwitcher from './LocaleSwitcher'
import HeaderLinks    from './HeaderLinks'
import UserBlock      from './UserBlock'
import { getDictionary } from '@/get-dictionary'

const MobileAppHeader = async ({ lang }: { lang: 'uk' | 'en' }) => {

  const { header } = await getDictionary(lang)

  return (
    <header className='mb-header'>
      <div className="mb-header-container container">
        <MobileHeaderContainer message={header}/>
      </div>
    </header>
  )
}

export default MobileAppHeader