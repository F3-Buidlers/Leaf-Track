import "./LeafTrackBanner.scss"
import React from 'react'

export function LeafTrackBanner({banner}) {
  return (
    <figure className='collection__banner'>
      <img src={banner} alt='banner' />
    </figure>
  )
}