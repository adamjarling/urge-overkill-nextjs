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
            New Single "Freedom"
          </h2>
        </ParallaxBannerChildren>
      </ParallaxBanner>
      <div className="my-6 text-center">
        <LinkButton href="https://www.newburycomics.com/collections/pre-orders/products/urge_overkill-saturation_exclusive_lp?variant=21259044454505">
          Listen
        </LinkButton>
      </div>
    </div>
  );
}

export default FreedomSingle;
