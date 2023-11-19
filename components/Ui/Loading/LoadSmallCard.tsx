import React from 'react'

const LoadSmallCard = () => {
  return (
    <div className="card">
      <div className="cover skeleton">
      </div>

      <div className="content">
        <h2 id="title" className="skeleton"></h2>
        <small id="subtitle" className="skeleton"></small>
        <p id="about" className="skeleton"></p>
      </div>
    </div>
  )
}

export default LoadSmallCard