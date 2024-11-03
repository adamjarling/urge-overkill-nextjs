import { ParallaxBanner } from "react-scroll-parallax";

function Splash1({ photo }) {
  return (
    <ParallaxBanner
      layers={[
        {
          amount: 0.2,
          image: `/images/${photo}`,
        },
      ]}
      style={{ height: "80vh" }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-end justify-end px-6 pb-6 md:pb-12 md:px-12 md:flex-row md:justify-between">
        {/* <Link href="/music">
          <a className="mb-6 font-sans text-2xl font-bold uppercase">
            Listen Now
          </a>
        </Link> */}
        <h1 className="text-right text-white">Urge Overkill</h1>
      </div>
    </ParallaxBanner>
  );
}

export default Splash1;
