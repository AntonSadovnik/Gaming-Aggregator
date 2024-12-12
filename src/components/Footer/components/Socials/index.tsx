import Link from "next/link";
import Image from "next/image";
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
    <>
      {socialMedia.map(({ url, svg }) => (
        <div key={url}>
          <Link href={url}>
            <Image src={svg} alt="" />
          </Link>
        </div>
      ))}
    </>
  );
}
