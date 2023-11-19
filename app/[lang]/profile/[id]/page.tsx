
import { Locale }        from '@/i18n-config'
import { useProfileStore } from '@/store/profile'

type Params = {
  params: { lang: Locale, id: number },
}
const page = ({ params: { lang, id } }: Params ) => {

  const profile = useProfileStore.getState().profile


  return (
    <div>{lang}, {id} </div>
  )
}

export default page