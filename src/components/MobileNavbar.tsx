/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, FC } from "react";
import Link from "next/link";
import { HiX } from "react-icons/hi";
import { HiBars4 } from "react-icons/hi2";
import { copy } from "@/copy";

const { nav } = copy.common;

export const MobileNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="w-full pt-4 pl-4 grid grid-col-2 sm:hidden grid-flow-col justify-between items-center">
      {isMenuOpen && (
        <ol className="row-start-2 flex flex-col items-start text-primary-700 text-xl">
          <li className="px-2 pb-2 w-full  hover:underline">
            <Link href="/signin">{nav.signIn}</Link>
            <div className="pt-2">
              <hr className="bg-gray-800 w-full" />
            </div>
          </li>
          <li className="px-2 pb-2 w-full  hover:underline">
            <Link href="/">{nav.home}</Link>
            <div className="pt-2">
              <hr className="bg-gray-800 w-full" />
            </div>
          </li>

          <li className="px-2 pb-2 w-full  hover:underline">
            <Link href="/about">{nav.about}</Link>
            <div className="pt-2">
              <hr className="bg-gray-800 w-full" />
            </div>
          </li>
          <li className="px-2 pb-2 w-full  hover:underline">
            <Link href="/explore">{nav.explore}</Link>
            <div className="pt-2">
              <hr className="bg-gray-800 w-full" />
            </div>
          </li>

          <li className="px-2 pb-2 w-full  hover:underline">
            <Link href="/downloadtheapp" className="flex flex-col">
              <span>{nav.downloadTheApp.link}</span>

              <span>{nav.downloadTheApp.top}</span>
              <span>{nav.downloadTheApp.bottom}</span>
            </Link>
          </li>
        </ol>
      )}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="row-start-1 col-start-1 lg:hidden text-primary-500"
      >
        {isMenuOpen ? (
          <>
            <HiX size={28} /> <span className="sr-only">X button</span>
          </>
        ) : (
          <>
            <HiBars4 size={28} /> <span className="sr-only">Burger button</span>
          </>
        )}
      </button>
      <Link href="/" className="pt-2 row-start-1">
        <img
          className="rounded-2xl scale-75"
          src={nav.logo.src}
          alt={nav.logo.alt}
        />
      </Link>
    </nav>
  );
};
