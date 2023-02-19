import "./App.scss";
import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import { ethers } from "ethers";
import { useAuth } from "../../hooks/useAuth"
import { LeafTrackMenu } from "../LeafTrackMenu"
import { LeafTrackWallet } from "../LeafTrackWallet"
import { LeafTrackHome } from '../LeafTrackHome';
import { LeafTrackMonitoreo } from '../LeafTrackMonitoreo';
import { LeafTrackSubscribe } from '../LeafTrackSubscribe'
import { LeafTrackProtectedAreaDetails } from '../LeafTrackProtectedAreaDetails';

function App() {
  const auth = useAuth();

  React.useEffect(() => {
    const currentNetwork = async () => {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const web3Signer = web3Provider.getSigner();
      const chainId = await web3Signer.getChainId();
      return chainId;
    };
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        currentNetwork().then((response) => {
          if (response !== 5) {
            auth.logout();
          }
        });
      });
      window.ethereum.on("accountsChanged", () => {
        auth.logout();
      });
    }
  });

  return (
    <React.Fragment>
      <LeafTrackMenu>
        <LeafTrackWallet />
      </LeafTrackMenu>
      <main>
          <Routes>
            <Route path="/" element={<LeafTrackHome />} />
            <Route path="/monitoreo" element={<LeafTrackMonitoreo />} />
            <Route path="/monitoreo/:slug" element={<LeafTrackProtectedAreaDetails/>} />
            <Route path="/subscribe" element={<LeafTrackSubscribe />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
      </main>
     
    </React.Fragment>
  );
}

export default App;
