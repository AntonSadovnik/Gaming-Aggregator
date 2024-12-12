import Link from "next/link";
import Image from "next/image";
import Logo from "@public/images/logo.svg";

export default function index() {
  return (
    <Link href="/">
      <Image src={Logo} alt="" />
    </Link>
  );
}
