'use client'
import Image from "next/image"
import Link from "next/link";
import { IMovies, IMovieResult } from "@/types/films"
import { URL_IMAGE } from '@/utils/constants/tmdb';

type PropType = {
  item: IMovieResult,
  type: string
}

const MediaCard = ({item, type}: PropType) => {
  return (
    <div className='media-card'>
      <div className="media-card-image">
        <Image
          fill
          src={`${URL_IMAGE}${item.poster_path}`}
          alt='swiper'
          style={{objectFit: "cover"}}
        />
      </div>
      <Link href={`/${type}/${item.id}`} className="media-card-name">{item.title}</Link>
      <div className="media-card-rating">
        <Image
          width={16}
          height={16}
          src='/star.svg'
          alt='swiper'
        />
        {(item.vote_average * 10).toFixed(0)}
      </div>
    </div>
  )
}

export default MediaCard