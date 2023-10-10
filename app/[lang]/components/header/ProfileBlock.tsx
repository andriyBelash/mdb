
import React from 'react'
import Link from 'next/link'


type PropsType = {
  message: any,
  lang: string
}

const ProfileBLock = ({message, lang}: PropsType) => {
  return (
    <div>
      <Link href={`/${lang}/login`} className='button button--white'>{ message.log_in }</Link>
    </div>
  )
}

export default ProfileBLock