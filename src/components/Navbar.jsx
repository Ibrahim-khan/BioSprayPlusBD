"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <div className="">
      <div className="container hidden md:block">
        <div className="flex w-fit gap-10 mx-auto font-semibold py-4 text-blackish">
          <Link className="navbar__link relative" href="/">
            Home
          </Link>
          <Link className="navbar__link relative" href="/video">
            Video
          </Link>
          <Link className="navbar__link relative" href="/blog">
            Blog
          </Link>
          <Link className="navbar__link relative" href="/profile">
            Profile
          </Link>
          <Link className="navbar__link relative" href="/about">
            About Us
          </Link>
          <Link className="navbar__link relative" href="/contact">
            Contact us
          </Link>
          <Link className="navbar__link relative" href="/order">
            Order now
          </Link>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-red-500 hover:text-black 
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={toggleNavbar}
        >
          {isClick ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {isClick && (
        <div className="md:hidden text-center">
          <div className="px-2 pt-2 pb-3 space-y-1 space-x-3 sm:px-3">
            <Link className="navbar__link relative text-[12px]" href="/">
              Home
            </Link>
            <Link className="navbar__link relative text-[12px]" href="/video">
              Video
            </Link>
            <Link className="navbar__link relative text-[12px]" href="/blog">
              Blog
            </Link>
            <Link className="navbar__link relative text-[12px]" href="/profile">
              Profile
            </Link>
            <Link className="navbar__link relative text-[12px]" href="/about">
              About Us
            </Link>
            <Link className="navbar__link relative text-[12px]" href="/contact">
              Contact us
            </Link>
            <Link className="navbar__link relative text-[12px]" href="/order">
              Order now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
