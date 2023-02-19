import React from 'react';
import './LeafTrackProtectedArea.scss'
import { Link } from 'react-router-dom';

export function LeafTrackProtectedArea({protectedArea}) {

  return (
    <div className="protected-area">
      <figure >
        <img src={protectedArea.imgbase64} alt="logo" />
      </figure>
      <div className="protected-area-description">
        <p className="protected-area-description__title">{protectedArea.name}</p>
      </div>
        <div className="protected-area-description__show">
          <Link to={`/monitoreo/${protectedArea.id}`}><button>SHOW</button></Link>
        </div>
    </div>
  )
}