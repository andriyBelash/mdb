import Link from 'next/link'
import MediaCard from './MediaCard'
const CardContent = () => {
  return (
    <section className='card-content'>
      <h2 className="card-content-title">Title</h2>
      <Link className='card-content-links' href={'#'}>Link</Link>
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