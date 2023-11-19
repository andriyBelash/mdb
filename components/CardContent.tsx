'use client'
import Link from 'next/link'
import MediaCard from '@/components/MediaCard'
import { useEffect } from 'react'

import useDraggable from '@/utils/hook/useDraggable'

import type { IMovies } from '@/types/films'
import type { ITvShow } from '@/types/tvShow'
import type { IPerson } from '@/types/person'

type PropType = {
  message: any,
  title: string,
  type: string,
  content: IMovies | ITvShow | IPerson
}

const CardContent = ({ message, title, type, content }: PropType) => {
  const list = content.results
  const {
    sliderRef,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
    cursorStyle,
    changeProgressWidth,
    progressStyle,
  } = useDraggable(`#content-${type}`);

  useEffect(() => {
    if(sliderRef.current) {
      (sliderRef.current as HTMLDivElement).scrollLeft = 0
      changeProgressWidth()
    }
  })

  const getType = (): string => {
    switch (type) {
      case 'movies':
        return 'movie'
        break;
      case 'tv-show':
        return 'tv'
        break;
      default:
        return type
    }
  }

  return (
    <section className='card-content'>
      <div className='card-content-header'>
        <h2 className="card-content-title">{title}</h2>
        <Link className='card-content-link' href={`/popular/${getType()}`}>{message.view_more}</Link>
      </div>
      <div
        ref={sliderRef}
        id={`content-${type}`}
        className='card-content-cards'
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{cursor : cursorStyle}}
      >
        { list.map(item => (
          <MediaCard type={type} item={item} key={item.id}/>
        )) }
      </div>
      <div className='grab-progress'>
        <div className='grab-progress-line' style={progressStyle}></div>
      </div>
    </section>
  )
}

export default CardContent
