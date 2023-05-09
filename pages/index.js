import Head from "next/head";
import Image from "next/image";
import Layout from "components/layout";
import NewSingle from "components/new-single";
import Saturation from "public/images/UO - Saturation 30th Anniversary Artwork .png";
import Saturation25 from "components/saturation-25-anniversary";
import Section from "components/section";
import Splash1 from "components/splash1";
import SplashMerchStore from "components/splash-merch-store";
import SplashOuiAlbum from "components/splash-oui-album";
import { getSortedPostsData } from "lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const thePost = allPostsData[0];

  return (
    <Layout>
      <Head>
        <title>Urge Overkill</title>
      </Head>

      <Splash1 photo={"UO-PressPhoto2byJerodHerzog.jpeg"} />

      <div>
        <Image src={Saturation} alt="Saturation 30th Anniversary" />
      </div>
      <div className="max-w-screen-lg mx-auto my-6 text-center">
        <h2>HAPPY 30TH ANNIVERSARY TO SATURATION</h2>
        <p>
          Originally released on June 8, 1993 on Geffen Records and produced by
          the Butcher Bros., this formidable album includes hit singles “Sister
          Havana" and "Positive Bleeding”. During this era, the band would go on
          to tour with Nirvana on their Nevermind tour and Pearl Jam on their
          Vs. tour. Stay tuned this month for more news and updates (and a
          possible new merch drop 👀 ) by signing up for our newsletter.
        </p>
      </div>
      <SplashOuiAlbum />

      <NewSingle />
      <SplashMerchStore />
    </Layout>
  );
}
