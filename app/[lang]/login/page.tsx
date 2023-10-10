import { Locale }        from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LoginCard         from './components/LoginCard'
import '@/styles/pages/login.scss'

export default async function Page({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { form } = await getDictionary(lang)

  return (
    <section className='flex flex-center full-width full-height'>
      <LoginCard message={form} lang={lang}/>
    </section>
  )
}