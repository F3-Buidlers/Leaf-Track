import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LeafTrackBanner } from '../LeafTrackBanner';
import { LeafTrackForm } from '../LeafTrackForm';
import './LeafTrackSubscribe.scss'
import banner from '../../asserts/images/banner-gray.png'

export function LeafTrackSubscribe() {
  const auth = useAuth();

  if (auth.user.walletAddress === "CONNECT WALLET") {
    return <Navigate to="/" />;
  }
  return (
    <div className='subscribe'>
      <LeafTrackBanner banner={banner}/>
      <h1 className='subscribe__title'>Join the hands</h1>
      <p className='subscribe__description'>As the underlying technology develops, a growing pool of artists are selling verified, immutable works to art lovers and speculators, and the space as a whole is waking up to the power and potential of decentralized networks and currencies. With creators and collectors generating meaningful revenue through an entirely digital ecosystem, the tokenization of gifs, memes, and MP4s is emerging as the most exciting and relevant blockchain use case. From SuperRare to Josie to JOY, browse and trade NFTs from some of the world's top crypto artists on OpenSea.</p>
      <LeafTrackForm />
    </div>
  )
}