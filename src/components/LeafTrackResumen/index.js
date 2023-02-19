import React from 'react';
import './LeafTrackResumen.scss'

export function LeafTrackResumen({protectedArea}) {
  return ( 
    <div className="resumen">
      <h1 className="resumen__title">NDVI Statistics</h1>
      <div className="resumen-list">
        <div className="resumen-list-head">
          <p className="resumen-list-head__title">Min</p>
          <p className="resumen-list-head__title">Max</p>
          <p className="resumen-list-head__title">Mean</p>
          <p className="resumen-list-head__title">SD</p>
          <p className="resumen-list-head__title">Date</p>
        </div>
         
      </div>
    </div>
  )
}