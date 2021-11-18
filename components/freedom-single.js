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
            New Single "Necessary Evil"
          </h2>
        </ParallaxBannerChildren>
      </ParallaxBanner>
      <div className="my-6 text-center">
        <LinkButton href="https://open.spotify.com/album/0K9jd9HG4f9EkRJvwJj6IU?si=9ygyhe49SSSCYjCtpbGH3Q">
          Listen
        </LinkButton>
      </div>
    </div>
  );
}

export default FreedomSingle;
