import React, { useEffect } from "react";
import "./LeafTrackProtectedAreaDetails.scss";
import protectedAreasList from "../../asserts/json/harcoredData.json";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LeafTrackResumen } from "../LeafTrackResumen";
import { LeafTrackProtectedAreaStatistics } from "../LeafTrackProtectedAreaStadistic";

export function LeafTrackProtectedAreaDetails() {
  const auth = useAuth();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [html, setHtml] = React.useState("");

  useEffect(() => {
    fetch("/file.html")
      .then((res) => res.text())
      .then((text) => { setHtml(text) });
  }, []);

  const protectedArea = protectedAreasList.find(
    (protectedArea) => protectedArea.id === slug
  );

  if (auth.user.walletAddress === "CONNECT WALLET" && protectedArea) {
    return <Navigate to="/" />;
  }

  return (
    <div className="details-container">
      <div className="details-container__back">
        <button onClick={() => navigate("/monitoreo")}>Back</button>
      </div>
      <div className="details-container-head">
        <p className="details-container-head__title">
          Nombre: {protectedArea.name}
        </p>
        <p className="details-container-head__slogan">ID: {protectedArea.id}</p>
      </div>
      <div className="details-container__vector"></div>
      <div className="details-container-project">
        <figure>
          <img src={protectedArea.imgbase64} alt="logo" />
        </figure>
        <div >
          <p className="details-container-project__item">
            Latitud: {protectedArea.lat}
          </p>
          <p className="details-container-project__item">
            Longitud: {protectedArea.min}
          </p>
          <p className="details-container-project__item">
            Date: {protectedArea.timestamp}
          </p>
        </div>
      </div>
      <LeafTrackResumen protectedArea={protectedArea} />
      <LeafTrackProtectedAreaStatistics
        data={protectedArea.mean}
        labels={"NDVI"}
      />

      {html && <iframe className="iframe" style={{height:"50vh",width:"50vw", display:"flex", textAlign:"center", justifyContent:"center"}} srcdoc={html}></iframe>}
    </div>

  );
}
