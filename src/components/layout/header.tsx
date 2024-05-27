"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import classNames from "classnames";

export default function Header() {
  const t = useTranslations("Header");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setVisible(currentScrollPos > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div
        className={classNames(
          "fixed top-0 z-[2] flex flex-col gap-0 w-full bg-white shadow-lg border-b-2 transition-transform duration-300",
          {
            "transform -translate-y-full": !visible,
            "transform translate-y-0": visible,
          },
        )}
      >
        <div className="flex w-full bg-transparent justify-between text-gray-dark">
          <div className="flex items-center justify-center px-3 py-2 lg:px-3">
            <Link href="/" className="cursor-pointer">
              <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
            </Link>
          </div>
          <div className="flex justify-between lg:px-8">
            <nav className="hidden lg:flex gap-16 2xl:gap-10 sm:w-full sm:h-full items-center">
              <Link href="/" className="text-body cursor-pointer">
                {t("home")}
              </Link>
              <Link href="/web2" className="text-body cursor-pointer">
                {t("web2")}
              </Link>
              <Link href="/web3" className="text-body cursor-pointer">
                {t("web3")}
              </Link>
            </nav>
            <div className="lg:hidden flex items-center justify-end my-auto">
              <button
                onClick={toggleMobileMenu}
                className="z-[501] ml-auto pr-2"
              >
                <Image
                  src={`${isMobileMenuOpen ? "/images/xmark.svg" : "/images/bars.svg"}`}
                  alt="Menu Toggle"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 transition-transform duration-200 ease-in-out z-[500] w-full max-w-[1500px] h-[200px] lg:hidden text-gray-dark ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="border-solid border-b-2 bg-[#FFF] h-full overflow-y-auto flex flex-col items-center justify-center text-gray-dark mt-12 gap-4">
          <Link href="/" className="text-body cursor-pointer">
            {t("home")}
          </Link>
          <Link
            href="/web2"
            className="transition-color duration-200 text-body cursor-pointer"
          >
            {t("web2")}
          </Link>
          <Link
            href="/web3"
            className="transition-color duration-200 text-body cursor-pointer"
          >
            {t("web3")}
          </Link>
        </nav>
      </div>
      <div
        className={classNames(
          "h-[60px] lg:h-[100px] lg:transition-transform lg:duration-300",
          {
            "lg:transform lg:translate-y-0": !visible,
            "lg:transform lg:-translate-y-full": visible,
          },
        )}
      />
    </>
  );
}
