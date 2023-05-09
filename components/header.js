import Image from "next/image";
import Link from "next/link";
import Obfuscate from "react-obfuscate";
import React from "react";
import SocialMediaIcons from "components/social-media-icons";
import classNames from "classnames";
import logo from "public/images/logo-uo1-header.png";
import names from "classnames";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const navLinks = [
  // {
  //   url: "/story",
  //   label: "Story",
  // },
  // {
  //   url: "/videos",
  //   label: "Videos",
  // },
  {
    url: "/discography",
    label: "Discography",
  },
  // {
  //   url: "/news",
  //   label: "News",
  // },
  // {
  //   url: "/tour",
  //   label: "Tour",
  // },
  // {
  //   url: "/contact",
  //   label: "Contact",
  // },
];

export default function Header() {
  const [active, setActive] = React.useState(false);
  const [isNavBg, setIsNavBg] = React.useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    setIsNavBg(currPos.y < -200);
  });

  return (
    <>
      <header
        className={classNames([
          "fixed",
          "top-0",
          "z-20",
          "min-w-full",
          "transition",
          "duration-1000",
          "bg-white",
          "bg-opacity-80",
        ])}
      >
        <div className="relative flex items-center justify-between w-40 px-4 pt-1 border-none md:px-8">
          <Link href="/">
            <Image
              src="/images/UO-Logo-cropped.png"
              alt="UO logo"
              layout="responsive"
              width={1496}
              height={576}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden text-sm uppercase lg:block">
            {navLinks.map(({ url, label }) => (
              <span key={url} className="px-6">
                <Link href={url} className="border-none">
                  {label}
                </Link>
              </span>
            ))}
          </nav>

          {/* Hamburger menu mobile nav */}
          <div
            className={names(
              ["tham", "tham-e-squeeze", "tham-w-8", "lg:hidden"],
              {
                "tham-active": active,
              }
            )}
            onClick={() => setActive(!active)}
          >
            <div className="tham-box">
              <div className="tham-inner bg-uo-black" />
            </div>
          </div>
        </div>
      </header>

      {/** Overlay */}
      <nav
        className={names(
          [
            "z-10",
            "fixed",
            "transition-all",
            "duration-1000",
            "ease-in-out",
            "h-screen",
            "w-screen",
            "bg-white",
            "text-3xl",
            "sm:text-5xl",
            "md:text-6xl",
            "font-display",
            "text-center",
            "tracking-widest",
            "h-0",
          ],
          {
            "opacity-90": active,
            "opacity-0": !active,
            "h-full": active,
            visible: active,
            invisible: !active,
          }
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="">
            {navLinks.map((nl) => (
              <li key={nl.label} className="py-5 font-sans uppercase sm:py-8">
                <Link href={nl.url} legacyBehavior>
                  <a className="border-none">{nl.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-0 flex items-center justify-center w-full mb-12 text-2xl">
          <SocialMediaIcons />
        </div>
      </nav>
    </>
  );
}
