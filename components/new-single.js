import React from "react";
import LinkButton from "./link-button";
import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";

function FreedomSingle() {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: `/images/UO-Logo-hi-res.png`,
          },
        ]}
        style={{ height: "60vh" }}
      >
        <ParallaxBannerChildren>
          <h2 className="text-black bg-white text-center">
            New Single
            <br />
            "Unforgiven"
          </h2>
        </ParallaxBannerChildren>
      </ParallaxBanner>
      <div className="my-6 text-center">
        <LinkButton href="https://open.spotify.com/album/5XUxpwrQqVtsndgTd7cYZc?si=3NodOBw2T5W4HO881e3wgw">
          Listen
        </LinkButton>
      </div>
    </div>
  );
}

export default FreedomSingle;
