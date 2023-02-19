import React from 'react';
import './LeafTrackProtectedAreas.scss'

export function LeafTrackProtectedAreas({children}) {
  return (
    <div className='protected-areas'>
      {React.Children.toArray(children).map(child => React.cloneElement(child, { }))}
    </div>
  )
}