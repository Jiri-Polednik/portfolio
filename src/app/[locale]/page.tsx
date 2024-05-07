import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import "@styles/globals.scss";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import PageSection from "@components/pageSection";
import React from "react";
import Image from "next/image";
import Button from "@components/ui/button";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return {
    title: t("homepage.title"),
    description: t("homepage.description"),
  };
}

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div>
      <div className={"flex justify-center bg-blue-light"}>
        <p className={"text-4xl font-bold text-center text-gray-dark mt-4"}>
          {t("HomePage.title")}
        </p>
      </div>
      <PageSection
        leftContent={
          <div className={"flex justify-center"}>
            <div className={"flex justify-center w-2/3"}>
              <a href={"https://anewgo.com"} target={"_blank"}>
                <Image
                  src={"/images/aboutme.png"}
                  alt={"Image 1"}
                  width={500}
                  height={500}
                  className={"rounded-2xl my-auto"}
                />
              </a>
            </div>
          </div>
        }
        rightContent={
          <div
            className={
              "w-2/3 flex-col justify-center items-center text-gray-dark"
            }
          >
            <p className={"text-center mt-4"}>
              {t("HomePage.description.one")}
            </p>
            <p className={"text-center mt-4"}>
              {t("HomePage.description.two")}
            </p>
            <p className={"text-center mt-4"}>
              {t("HomePage.description.three")}
            </p>
          </div>
        }
        bgColor={"blue-light"}
      />
      <PageSection
        bgColor={"blue-dark"}
        content={
          <div
            className={
              "flex flex-col justify-center text-gray-light w-full gap-8 py-5"
            }
          >
            <div>
              <p className={"text-2xl font-bold text-center"}>
                {t("HomePage.explore")}
              </p>
            </div>
            <div className={"flex gap-4 justify-center"}>
              <Link href="/web2" className="cursor-pointer">
                <Button variant={"primary"}>{t("HomePage.web2")}</Button>
              </Link>
              <Link href="/web3" className="cursor-pointer">
                <Button variant={"primary"}>{t("HomePage.web3")}</Button>
              </Link>
            </div>

            <div>
              <p className={"text-center mt-4"}>{t("HomePage.email")}</p>
            </div>

            <div className={"flex gap-4 justify-center"}>
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
        }
      />
    </div>
  );
}
