import "./LeafTrackMonitoreo.scss";
import React from "react";
import banner from '../../asserts/images/forestnft.png'
import protectedAreasList from '../../asserts/json/harcoredData.json'
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from 'react-router-dom';
import { LeafTrackBanner } from '../LeafTrackBanner';
import { LeafTrackProtectedAreas } from '../LeafTrackProtectedAreas';
import { LeafTrackProtectedArea } from '../LeafTrackProtectedArea';

export function LeafTrackMonitoreo(){
  const auth = useAuth();

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);


  if (auth.user.walletAddress === "CONNECT WALLET") {
    return <Navigate to="/" />;
  }
  return (
    <div className='monitoreo'>
      <LeafTrackBanner banner={banner}>
      </LeafTrackBanner>
      <p className='monitoreo__title'>Dynamic NFTs.</p>
      <p className='monitoreo__description'>The right to truthful and complete information is something that motivates us. Our Skywood dynamic NFTs let you access all of the monitoring information for each of our registered ecosystems.</p>
      {error && <p className='monitoreo__description'>There was an error, look the console inspect</p>}
      {loading && !error && 
        <LeafTrackProtectedAreas>
          {protectedAreasList.map((protectedArea, index) => (
            <LeafTrackProtectedArea key={index} protectedArea={protectedArea} />
          ))}
        </LeafTrackProtectedAreas>
      }
    </div>
  )
}