import Link from 'next/link'
import MediaCard from './MediaCard'

type PropType = {
  message: any,
  title: string
}

const CardContent = ({ message, title }: PropType) => {
  return (
    <section className='card-content'>
      <h2 className="card-content-title">{ title }</h2>
      <Link className='card-content-link' href={'#'}>{message.view_more}</Link>
      <div className='card-content-cards'>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
      </div>
    </section>
  )
}

export default CardContent