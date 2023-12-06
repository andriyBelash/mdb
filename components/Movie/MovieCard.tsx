import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MovieCard = () => {
  return (
    <div className="movie">
      <div className="movie-img">
        <Image
          priority
          width={575}
          height={380}
          src={'/preview.png'}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          alt='img'
        />
      </div>
      <div className="text-movie-cont">
        <div className="mr-grid">
          <div className="col1">
            <h1>Interstellar</h1>
            <ul className="movie-gen">
              <li>PG-13  /</li>
              <li>2h 49min  /</li>
              <li>Adventure, Drama, Sci-Fi,</li>
            </ul>
          </div>
        </div>
        <div className="mr-grid summary-row">
          <div className="col2">
            <h5>SUMMARY</h5>
          </div>
          <div className="col2">
            <ul className="movie-likes">
              <li className='flex'> <Image
                width={16}
                height={16}
                src='/star.svg'
                alt='swiper'
              />3</li>
            </ul>
          </div>
        </div>
        <div className="mr-grid">
          <div className="col1">
            <p className="movie-description">A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great
              Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way. </p>
          </div>
        </div>
        <div className="mr-grid actors-row">
          <div className="col1">
            <p className="movie-actors">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard