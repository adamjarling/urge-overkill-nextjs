import { ExternalLink } from "zuma-blocks";
import Head from "next/head";
import Image from "next/image";
import Layout from "components/layout";
import MerchDrop from "public/images/Merch Drop 2023.png";
import NewSingle from "components/new-single";
import Saturation from "public/images/UO - Saturation 30th Anniversary(1).png";
import Splash1 from "components/splash1";
import SplashMerchStore from "components/splash-merch-store";
import SplashOuiAlbum from "components/splash-oui-album";
import StullEP from "public/images/Stull_EP_Website_Banner_2240x1260.png";

export default function Home({}) {
  return (
    <Layout>
      <Head>
        <title>Urge Overkill</title>
      </Head>

      <Splash1 photo={"UO-PressPhoto2byJerodHerzog_crop.png"} />

      <div>
        <ExternalLink href="https://store.touchandgorecords.com/products/urge-overkill-stull-10-red-vinyl">
          <Image
            src={StullEP}
            alt="Stull EP Reissue"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </ExternalLink>
        <div className="max-w-screen-lg px-2 mx-auto my-6 text-center">
          <h2>
            STULL EP
            <br />
            LIMITED EDITION RED VINYL
          </h2>

          <p>
            Online store exclusive! Thirty years since its original release in
            1992 and almost that long since Uma Thurman famously lip-synced to
            the band&apos;s now iconic cover of “Girl, You&apos;ll Be A Woman
            Soon,” we are pleased to reissue the long out-of-print Stull 10” EP
            on LIMITED EDITION RED VINYL! Only 300 copies pressed!
          </p>

          <p>
            Order now on{" "}
            <ExternalLink href="https://store.touchandgorecords.com/products/urge-overkill-stull-10-red-vinyl">
              Touch and Go
            </ExternalLink>
            .
          </p>
        </div>
      </div>

      <div>
        <ExternalLink href="https://porterhouserecords.com/store/UO/saturation.html">
          <Image
            src={Saturation}
            alt="Saturation 30th Anniversary"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </ExternalLink>
      </div>
      <div className="max-w-screen-lg px-2 mx-auto my-6 text-center">
        <h2>HAPPY 30TH ANNIVERSARY TO SATURATION</h2>
        <p>
          Originally released on June 8, 1993 on Geffen Records and produced by
          the Butcher Bros., this formidable album includes hit singles “Sister
          Havana" and "Positive Bleeding”. During this era, the band would go on
          to tour with Nirvana on their <i>Nevermind</i> tour and Pearl Jam on
          their <i>Vs.</i> tour.
        </p>

        <p>
          Celebrate this anniversary by ordering our classic UO Ball and Catch
          The Fever t-shirts! Now available for{" "}
          <a
            href="https://www.hellomerch.com/collections/urge-overkill"
            target="_blank"
          >
            pre-order
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col items-center justify-center pb-12">
        <a
          href="https://www.hellomerch.com/collections/urge-overkill"
          target="_blank"
        >
          <Image
            src={MerchDrop}
            alt="Merch Drop Banner of UO Shirt"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
      </div>

      <SplashOuiAlbum />

      {/* <NewSingle /> */}
    </Layout>
  );
}
