'use client'
import Image from "next/image"
import Link from "next/link";

import type { IMovieResult }   from "@/types/films"
import type { ITvShowResult }  from "@/types/tvShow";
import type { PersonResult } from "@/types/person";

import { URL_IMAGE } from '@/utils/constants/tmdb';

type PropType = {
  item: IMovieResult | ITvShowResult | PersonResult,
  type: string
}

const MediaCard = ({item, type}: PropType) => {

  const mediaType = (): string => {
    if(type == 'movies') return 'movie'
    else {
      return type
    }
  }

  return (
    <div className='media-card'>
      <div className="media-card-image">
        <Image
          fill
          src={`${URL_IMAGE}${ type === 'person' ? (item as PersonResult).profile_path : (item as IMovieResult).poster_path}`}
          alt={type === 'movies' ? (item as IMovieResult).title : (item as ITvShowResult).name}
          style={{objectFit: "cover"}}
        />
      </div>
      <Link href={`/${mediaType()}/${item.id}`} className="media-card-name">{type === 'movies' ? (item as IMovieResult).title : (item as ITvShowResult).name}</Link>

      { type !== 'person' ?
        <div className="media-card-rating">
          <Image
            width={16}
            height={16}
            src='/star.svg'
            alt='swiper'
          />
          {((item as IMovieResult).vote_average * 10).toFixed(0)}
        </div>
        :
        null
      }

    </div>
  )
}

export default MediaCard