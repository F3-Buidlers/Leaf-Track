import "./LeafTrackBanner.scss";
import React from 'react';

/**
 * LeafTrackBanner is a React component that displays a banner image.
 *
 * @param {string} banner - The URL of the banner image.
 */
export function LeafTrackBanner({ banner }) {
  return (
    <figure className='collection__banner'>
      <img src={banner} alt='banner' />
    </figure>
  );
}
