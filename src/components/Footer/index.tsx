"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@public/images/logo.svg";
import Facebook from "@public/images/facebook.svg";
import Twitter from "@public/images/twitter.svg";
import Instagram from "@public/images/instagram.svg";

export default function index() {
  const socialMedia = [
    { url: "https://www.facebook.com/", svg: Facebook },
    { url: "https://x.com/", svg: Twitter },
    { url: "https://www.instagram.com/", svg: Instagram },
  ];
  return (
    <footer className="bg-black">
      <div className="py-5">
        <div>
          <Link href="/">
            <Image src={Logo} alt="" />
          </Link>
        </div>
        <p>
          CineSphere is your go-to platform for a world of entertainment,
          offering a vast library of films, TV shows, and exclusive content.{" "}
        </p>
        <div>
          {socialMedia.map(({ url, svg }) => (
            <div key={url}>
              <Link href={url}>
                <Image src={svg} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
