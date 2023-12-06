import { Locale }        from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import { getDetails, getPersonImages, getPersonCredits } from '@/utils/api/person'

import PersonCredits  from '@/components/person/PersonCredits'
import PersonMainInfo from '@/components/person/PersonMainInfo'

type PropsType = {
  params: { lang: Locale, personId: number }
}

const page = async ({ params: { lang, personId }}: PropsType) => {

  const [details, images, credits] = await Promise.all([getDetails(personId, lang), getPersonImages(personId), getPersonCredits(personId, lang)])

  const { page, person, header } = await getDictionary(lang)

  return (
    <div className="page">
      <div className="wrapper">
        <span className='text-4xl text-white'>{ details.name}</span>
        <div className='flex md:flex-row flex-col gap-5 mt-10'>
          <PersonMainInfo message={{...page, ...person}} images={images} details={details}/>
          <div className='person'>
            <p className='text-white text-l'>{details.biography}</p>
            <PersonCredits message={header} credits={credits}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page