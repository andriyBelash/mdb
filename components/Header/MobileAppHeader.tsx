import '@/styles/components/header.scss'
import MobileHeaderContainer from './MobileHeaderContainer'

import { getDictionary } from '@/get-dictionary'

import { IProfile } from '@/types/profile'

type PropsType = {
  lang: 'uk' | 'en',
  user: IProfile | undefined
}

const MobileAppHeader = async ({ lang, user }: PropsType) => {

  const { header } = await getDictionary(lang)

  return (
    <header className='mb-header'>
      <div className="mb-header-container container">
        <MobileHeaderContainer user={user} message={header}/>
      </div>
    </header>
  )
}

export default MobileAppHeader