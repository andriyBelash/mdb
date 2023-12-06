import { FaCircleInfo }     from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import Image                from "next/image";
import type { Cast }             from "@/types/person";
import { CLEAR_URL_IMAGE }  from "@/utils/constants/tmdb";

type PropsType = {
  cast: Cast
}

const PersonCreditItem = ({cast}: PropsType) => {
  return (
    <div className="flex items-center justify-between w-full p-3 border-b border-grey">
      <div className="flex items-center gap-3">
        <Image
          width={50}
          height={60}
          alt='image'
          src={`${CLEAR_URL_IMAGE}w300${cast.poster_path}`}
        />
        <div className="flex flex-col justify-between">
          <span className="text-white tex-l">{cast.title ?? cast.name}</span>
          <span className="flex items-center gap-2 text-[orange] text-sm"><IoIosStarOutline color='orange'/> {cast.vote_average ? (cast.vote_average * 10).toFixed(0) : 0}</span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <span className="text-white text-sm">{cast.release_date ?? cast.first_air_date}</span>
        {/* { cast.overview ? <button><FaCircleInfo size={25} color='white'/></button> : null} */}
      </div>
    </div>
  )
}

export default PersonCreditItem