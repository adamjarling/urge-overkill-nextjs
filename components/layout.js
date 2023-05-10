import Footer from "components/footer";
import Head from "next/head";
import Header from "components/header";
import Image from "next/legacy/image";

export const siteTitle = "Urge Overkill";

export default function Layout({ children, home }) {
  return (
    <div className="min-h-screen font-light bg-white text-uo-black font-display">
      <Head>
        <meta
          name="description"
          content="Urge Overkill is an American alternative rock band, formed in Chicago, Illinois, United States, consisting of Nash Kato (vocals/guitar), and Eddie King Roeser (vocals/guitar/bass guitar)"
        />
        <meta property="og:image" content="/images/uo-circle-logo-400px.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
