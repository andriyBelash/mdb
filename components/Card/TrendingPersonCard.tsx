'use client'

import { IPerson, TrendingResult } from "@/types/other"

import { CLEAR_URL_IMAGE } from "@/utils/constants/tmdb"

import Image  from "next/image"
import Link   from "next/link"

type PropType = {
  item: IPerson | TrendingResult
}

const TrendingPersonCard = ({item}: PropType) => {
  return (
    <Link href={`/person/${item.id}`} className="trending-card person-card">
      <div className="trending-card-image">
        <Image
          fill
          src={`${CLEAR_URL_IMAGE}w500/${(item as IPerson).profile_path}`}
          alt='media'
          style={{objectFit: 'cover'}}
        />
      </div>
      <p className="trending-card-name">{item.name}</p>
    </Link>
  )
}

export default TrendingPersonCard