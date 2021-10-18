import Link from "next/link";

const sharedClasses = [
  "py-10 px-16 tracking-widest text-2xl uppercase inline-block border-3 text-center",
];

export default function LinkButton({ children, href, isInverted, isExternal }) {
  return isInverted ? (
    <Link href={href}>
      <a
        target={isExternal ? `_blank` : undefined}
        className={`${[
          ...sharedClasses,
        ]} bg-black hover:bg-transparent text-gray-100 font-sans hover:text-gray-800 border-none hover:border-black`}
      >
        {children}
      </a>
    </Link>
  ) : (
    <Link href={href}>
      <a
        target={isExternal ? `_blank` : undefined}
        className={`${[
          ...sharedClasses,
        ]} bg-uo-blue hover:bg-transparent text-white font-sans hover:text-uo-blue border border-solid border-uo-blue `}
      >
        {children}
      </a>
    </Link>
  );
}
