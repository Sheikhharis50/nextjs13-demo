"use client";

import Link from "next/link";
import Image from "next/image";
import MenuRoutes from "@/routes/menu";
import React from "react";

export default function Navbar() {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  return (
    <nav
      className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          px-4
          text-lg text-gray-700
          bg-white
        "
    >
      <div>
        <Link href="/">
          <Image src="/icons/next.svg" alt="Next" width={150} height={100} />
        </Link>
      </div>

      <Image
        className="cursor-pointer md:hidden"
        src="/icons/hamburger.svg"
        alt="Hamburger Menu"
        width={50}
        height={50}
        onClick={() => setOpen(!isOpen)}
      />

      <div
        className={`
          w-full 
          md:flex md:items-center md:w-auto
          ${!isOpen && "hidden"}
        `}
      >
        <ul
          className="
            text-base text-gray-700
            pt-4
            md:flex
            md:justify-between
            md:pt-0
          "
        >
          {MenuRoutes.map((route, index) => (
            <li key={`MenuRoute-${index}`}>
              <Link className="md:p-4 py-2 block" href={route.path}>
                {route.displayName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
