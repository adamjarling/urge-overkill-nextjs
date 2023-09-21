import React from "react";
import MailChimpForm from "components/mailchimp-form";
import Link from "next/link";
import Section from "components/section";
import ExternalLink from "./external-link";
import { distributors } from "social-media-manifest";
import Obfuscate from "react-obfuscate";

const footerSocials = [
  {
    label: "Instagram",
    url: distributors.instagram,
  },
  {
    label: "YouTube",
    url: distributors.youTubeChannel,
  },
  {
    label: "Spotify",
    url: distributors.spotify,
  },
  {
    label: "Facebook",
    url: distributors.facebook,
  },
];

export default function Footer() {
  return (
    <footer className="text-xl text-white uppercase bg-uo-orange md:text-2xl">
      <Section>
        <div className="flex flex-col pl-6 md:flex-row md:pl-12">
          <div className="flex-1 pb-10">
            <p>Contact:</p>
            <span className="text-base md:text-lg lg:text-2xl">
              <Obfuscate email="beth@bethwinermanagement.com">
                beth@bethwinermanagement.com
              </Obfuscate>
            </span>
          </div>
          <ul className="flex-1">
            {footerSocials.map((item) => (
              <li key={item.url}>
                <ExternalLink url={item.url}>{item.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>

        {/* <MailChimpForm /> */}
      </Section>
    </footer>
  );
}
