import './LeafTrackWallet.scss'
import React from 'react';
import { ethers } from 'ethers';
import { useAuth } from '../../hooks/useAuth';

export function LeafTrackWallet() {
  const [loading, setLoading] = React.useState(false)
  const auth = useAuth()

  const connectWallet = async () => {
    if (!window.ethereum?.isMetaMask) {
      alert("Metamask wasn't detected, please install metamask extension")
      return
    }

    if (auth.user.walletAddress === 'CONNECT WALLET') {
      setLoading(true)
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum)
      await web3Provider.send('eth_requestAccounts', [])
      const accounts = await web3Provider.send('eth_requestAccounts', [])
      console.log("accounts[0]: ", accounts[0])

      const web3Signer = web3Provider.getSigner()
      const chainId = await web3Signer.getChainId()
      if (chainId !== 5) {
        auth.logout()
        alert("Change your network to Goerli's testnet!")
        setLoading(false)
        return
      }
      auth.login({ walletAddress: accounts[0] })
      setLoading(false)

    } else {
      auth.logout()
      setLoading(false)
    }
  }

  return (
    <button className='button-wallet' onClick={connectWallet}>
      {loading ? 'loading...' : auth.user.walletAddress !== 'CONNECT WALLET' ? '...' + String(auth.user.walletAddress).slice(36) : 'CONNECT WALLET'}
    </button>
  )
}

