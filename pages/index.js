import Head from "next/head";
import Layout from "components/layout";
import Splash1 from "components/splash1";
import Image from "next/image";
import LatestNewsItem from "components/latest-news-item";
import { getSortedPostsData } from "lib/posts";
import Saturation25 from "components/saturation-25-anniversary";

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
      <Splash1 photo={"UO_side-cropped.jpg"} />
      <Saturation25 />
    </Layout>
  );
}

// // This gets called on every request
// export async function getServerSideProps() {
//   const index = getRandomInt(2);
//   const photo = bgImages[index];

//   // Pass data to the page via props
//   return { props: { photo } };
// }
