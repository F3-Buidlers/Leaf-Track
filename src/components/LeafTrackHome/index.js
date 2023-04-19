import "./LeafTrackHome.scss";
import React from "react";
import rectangulo from "../../asserts/images/rectangulo.png";

export function LeafTrackHome() {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <div className="home-container-header">
            <p className="home-container-header__title">
              "Unleash your inner eco-warrior and combat deforestation with every NFT you own."
            </p>
            <p className="home-container-header__description">
              "Experience the living and breathing world of NFTs, as our dynamic creations evolve in real-time, powered by data collected from our state-of-the-art satellite monitoring system."
            </p>
            {/* <div className="home-container-header__browser">
              <p>BROWSER NOW</p>
            </div> */}
          </div>
          <figure>
            <img src={rectangulo} alt="rectangulo" />
          </figure>
        </div>
        <div className="home-info">
          <p className="home-info__description">
            31% of the Earth’s surface is covered by forests.
          </p>
          <p className="home-info__description">
            Only 18% of the world's forests are on land protected from
            deforestation.
          </p>
          <p className="home-info__description">
            Over 420 million hectares of forest have been lost since 1990.
          </p>
        </div>
        <div className="home-subscribe">
          <p className="home-subscribe__title">Join the movement towards a sustainable future by enrolling for a subscription to a world that's healthier, cleaner, and greener."</p>
          <p className="home-subscribe__description">
            "Empower yourself with vital knowledge about your reserve's vegetation layer through our cutting-edge monitoring system, acting as your very own environmental sentry, providing early warnings and enabling you to make informed decisions with confidence."
          </p>
          {/* <div className="home-subscribe__browser">
            <p>LEAR MORE</p>
          </div> */}
        </div>
        <div className="home__vector"></div>
        <div className="home-built-tecnologies">

        </div>
      </div>
    </>
  );
}
