import Image from "next/image"

const MediaCard = () => {
  return (
    <div className='media-card'>
      <div className="media-card-image">
        <Image
          fill
          src='/preview.png'
          alt='swiper'
          style={{objectFit: "cover"}}
        />
      </div>
      <div className="media-card-name">Name film</div>
      <div className="media-card-rating">
        <Image
          width={16}
          height={16}
          src='/star.svg'
          alt='swiper'
        />
        92
      </div>
    </div>
  )
}

export default MediaCard