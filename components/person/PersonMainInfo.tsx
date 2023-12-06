'use client'
import { useState } from 'react'

import Image  from "next/image"
import Link   from 'next/link'

import { CLEAR_URL_IMAGE } from "@/utils/constants/tmdb"
import { IoIosHome } from "react-icons/io";
import type { IPersonDetail, IPersonImages } from "@/types/person"


import Modal from '../Ui/Modal'

type PropsType = {
  details: IPersonDetail,
  images: IPersonImages,
  message: any
}

const PersonMainInfo = ({ details, images, message }: PropsType) => {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="w-72 min-w-64 m-auto md:m-0">
      <div className="md:m-0 m-auto w-64 h-96">
        <Image
          width={256}
          height={384}
          src={`${CLEAR_URL_IMAGE}w500${details.profile_path}`}
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      {images.profiles.length ? (<button onClick={() => setOpen(true)} className="primary-btn w-full mt-10">{message.show_more_photo} ({images.profiles.length})</button>) : null}


      <div className='flex gap-5 flex-col mt-5'>
        <div className='flex flex-wrap gap-5'>
          <p className='text-white'>{ details.homepage ? (<a target="_blank" href={details.homepage}><IoIosHome size={30}/></a>) : null}</p>
        </div>
        <p className='text-white'><span>{message.birthday}</span>: <span>{details.birthday}</span></p>
        <p className='text-white'><span>{message.place_of_birth}</span>: <span>{details.place_of_birth}</span></p>
        <p className='text-white'><span>{message.deathday}</span>: <span>{details.deathday ?? '-'}</span></p>
        <p className='text-white'><span>{message.gender}</span>: <span>{details.gender === 2 ? message.male : message.female }</span></p>
        <p className='text-white'><span>{message.known_for_department}</span>: <span>{details.known_for_department }</span></p>

      </div>
      { open ? (
        <Modal size='md' open={open} closeModal={() => setOpen(false)}>
          <div className='md:h-[42rem] h-[32rem] mt-5 overflow-auto flex gap-5 flex-col'>
          {images.profiles.map((image, index) => (
            <div key={index} className='md:min-h-[42rem] sm:min-h-[32rem] min-h-[24rem] relative'>
              <Image
                fill
                src={`${CLEAR_URL_IMAGE}w500${image.file_path}`}
                alt="Picture of the author"
              />
            </div>
          ))}
          </div>
        </Modal>
      )  : null}

    </div>
  )
}

export default PersonMainInfo