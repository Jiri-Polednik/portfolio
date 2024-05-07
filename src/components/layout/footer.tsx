import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gray-dark text-white py-8 lg:p-4">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-around items-center">
        <div className="flex flex-col">
          <Image
            src={"/images/Icon.svg"}
            alt={"logo"}
            width={150}
            height={30}
          />
          <p className="text-sm mt-2">{t("tagline")}</p>
        </div>

        <div className="flex gap-4">
          <a
            href={t("HomePage.linkedinLink")}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <Image
              src={"/images/linkedin.svg"}
              alt={"LinkedIn"}
              width={50}
              height={50}
            />
          </a>
          <a
            href={t("HomePage.githubLink")}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <Image
              src={"/images/github.svg"}
              alt={"GitHub"}
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:justify-around items-center py-8">
        <div className="flex flex-col">
          <p className="text-xs">{t("poweredBy")}</p>
        </div>

        <div className="text-xs">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
