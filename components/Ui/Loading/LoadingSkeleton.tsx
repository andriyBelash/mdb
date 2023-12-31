import React from 'react'
import LoadSmallCard from './LoadSmallCard'

const LoadingSkeleton = () => {
  return (
    <div className='wrapper loading'>
      <div className='load-row'>
        <LoadSmallCard/>
        <LoadSmallCard/>
        <LoadSmallCard/>
        <LoadSmallCard/>
      </div>
      <div className='load-row'>
        <LoadSmallCard/>
        <LoadSmallCard/>
        <LoadSmallCard/>
        <LoadSmallCard/>
      </div>
      <div className='load-row'>
        <LoadSmallCard/>
        <LoadSmallCard/>
        <LoadSmallCard/>
        <LoadSmallCard/>
      </div>
    </div>
  )
}

export default LoadingSkeleton