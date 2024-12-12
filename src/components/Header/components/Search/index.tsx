import Image from "next/image";
import Burger from "@public/images/burger.svg";
import Search from "@public/images/search.svg";

export default function index({
  displayBurger,
  setDisplayBurger,
}: {
  displayBurger: boolean;
  setDisplayBurger: (value: boolean) => void;
}) {
  return (
    <>
      <Image
        className="md:hidden"
        onClick={() => setDisplayBurger(!displayBurger)}
        src={Burger}
        alt=""
      />

      <Image className="hidden md:block" src={Search} alt="" />
    </>
  );
}
