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
              fight deforestation, one NFT at a time.
            </p>
            <p className="home-container-header__description">
              our dynamic NFTs are constantly changing, based on the information
              captured by our satellite monitoring system.
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
          <p className="home-subscribe__title">subscribe to a greener world.</p>
          <p className="home-subscribe__description">
            our monitoring system provides crucial information on the vegetation
            layer of your reserve, acting as an early warning system that helps
            you make well-informed decisions as needed.
          </p>
          {/* <div className="home-subscribe__browser">
            <p>LEAR MORE</p>
          </div> */}
        </div>
        <div className="home__vector"></div>
        <div className="home-built-tecnologies">
          <p className="home-built__title">how we built it.</p>
        </div>
      </div>
    </>
  );
}
