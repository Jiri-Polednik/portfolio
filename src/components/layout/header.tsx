"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const t = useTranslations("Header");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-gray-800 bg-opacity-75 p-4 fixed w-full top-0 left-0 z-50 transition-transform duration-300 ${isVisible ? "transform-none" : "-translate-y-full"}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">
          <Link href="/" className="text-white">
            <Image
              src={"/images/logo.png"}
              alt={"logo"}
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white">
            {t("home")}
          </Link>
          <Link href="/web2" className="text-white">
            {t("web2")}
          </Link>
          <Link href="/web3" className="text-white">
            {t("web3")}
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}
      >
        <Link href="/" className="block px-4 py-2 text-white">
          {t("home")}
        </Link>
        <Link href="/web2" className="block px-4 py-2 text-white">
          {t("web2")}
        </Link>
        <Link href="/web3" className="block px-4 py-2 text-white">
          {t("web3")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
