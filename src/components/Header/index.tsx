"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import MenuItems from "./components/MenuItems";
import Search from "./components/Search";

export default function index() {
  const [displayBurger, setDisplayBurger] = useState(false);
  return (
    <nav className="relative bg-black flex justify-between items-center py-4">
      <div>
        <Logo />
      </div>
      <div
        className={`${
          displayBurger ? "block" : "hidden"
        } absolute md:static md:block top-[100%] left-0 bg-black w-full md:w-fit`}
      >
        <MenuItems />
      </div>
      <div>
        <Search
          displayBurger={displayBurger}
          setDisplayBurger={setDisplayBurger}
        />
      </div>
    </nav>
  );
}
