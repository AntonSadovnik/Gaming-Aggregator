"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "@public/images/logo.svg";
import Burger from "@public/images/burger.svg";
import Search from "@public/images/search.svg";

export default function index() {
  const [displayBurger, setDisplayBurger] = useState(false);
  const menuItems = [
    { id: 1, name: "Upcoming", url: "/" },
    { id: 2, name: "Shows", url: "/" },
    { id: 3, name: "Fanart", url: "/" },
    { id: 4, name: "Plans", url: "/" },
    { id: 5, name: "Community", url: "/" },
    { id: 6, name: "Account", url: "/" },
  ];
  return (
    <nav className="relative bg-black flex justify-between items-center py-4">
      <div>
        <Link href="/">
          <Image src={Logo} alt="" />
        </Link>
      </div>
      <div
        className={`${
          displayBurger ? "block" : "hidden"
        } absolute md:static md:block top-[100%] left-0 bg-black w-full md:w-fit`}
      >
        <div className="flex flex-col md:flex-row gap-3">
          {menuItems.map(({ id, name, url }) => (
            <Link
              className="text-mobile-6 hover:text-primary"
              key={id}
              href={url}
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <input
            className="w-full border border-primary"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div>
        <Image
          className="md:hidden"
          onClick={() => setDisplayBurger(!displayBurger)}
          src={Burger}
          alt=""
        />

        <Image className="hidden md:block" src={Search} alt="" />
      </div>
    </nav>
  );
}
