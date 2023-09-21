import ExternalLink from "components/external-link";
import Head from "next/head";
import Image from "next/image";
import ImageCalloutCallout from "components/image-callout/callout";
import ImageCalloutImage from "components/image-callout/image";
import ImageCalloutWrapper from "components/image-callout/wrapper";
import Layout from "components/layout";
import LinkButton from "components/link-button";
import Section from "components/section";
import SplashMerchStore from "components/splash-merch-store";
import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";

export default function Store() {
  function isEvenRow(i) {
    return i % 2 > 0 && i !== 0;
  }

  return (
    <Layout>
      <Head>
        <title>Store - Urge Overkill</title>
      </Head>

      <div className="">
        <div>
          <ParallaxBanner
            layers={[
              {
                amount: 0.2,
                image: `/images/uo-oui-album-1200px.jpg`,
              },
            ]}
            style={{ height: "60vh" }}
          >
            <ParallaxBannerChildren>
              <div className="flex flex-col items-center">
                <h2 className="text-center text-white">Store</h2>
              </div>
            </ParallaxBannerChildren>
          </ParallaxBanner>

          <section className="flex flex-col items-center justify-center my-8">
            <div className="max-w-screen-lg my-6 text-center">
              <div className="flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                <LinkButton
                  isExternal
                  href="https://www.hellomerch.com/collections/urge-overkill"
                >
                  US Store
                </LinkButton>
                <LinkButton
                  isExternal
                  href="https://www.musicglue.com/urge-overkill/"
                >
                  EU/UK Store
                </LinkButton>
                <LinkButton
                  isExternal
                  href="https://urge-overkill.printify.me/"
                >
                  AUS/NZ Store
                </LinkButton>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
