import Head from "next/head";
import Layout from "components/layout";
import Splash1 from "components/splash1";
import Image from "next/image";
import { getSortedPostsData } from "lib/posts";
import Saturation25 from "components/saturation-25-anniversary";
import Section from "components/section";

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
      <Section isCentered>
        <Image src="/images/urge-logo-90s.png" width="800" height="310" />
        <p>...coming soon</p>
      </Section>
      {/* <Splash1 photo={"UO_side-cropped.jpg"} />
      <Saturation25 /> */}
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
