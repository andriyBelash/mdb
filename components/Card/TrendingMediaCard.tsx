import { TrendingResult } from "@/types/other"
import { CLEAR_URL_IMAGE } from "@/utils/constants/tmdb"

import Image  from "next/image"
import Link   from "next/link"

type PropsType = {
  item: TrendingResult
}

const TrendingMediaCard = ({item}: PropsType) => {
  const type = ():string => {
    switch (item.media_type) {
      case 'tv':
        return 'tv-show'
        break;
      default:
        return item.media_type
    }
  }
  return (
    <Link href={`/${type()}/${item.id}`} className="trending-card joint-card">
      <div className="trending-card-image">
        <Image
          fill
          src={`${CLEAR_URL_IMAGE}w500/${item.poster_path}`}
          alt='media'
          style={{objectFit: 'cover'}}
        />
      </div>
      <p className="trending-card-name">{item.title ?? item.name} <span>{item.first_air_date ?? item.release_date}</span></p>
    </Link>
  )
}

export default TrendingMediaCard