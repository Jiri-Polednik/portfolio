import PageSection from "@components/pageSection";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Button from "@components/ui/button";
import React from "react";

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div>
      <PageSection
        leftContent={
          <div className={"flex justify-center items-center w-2/3"}>
            <a href={"https://anewgo.com"} target={"_blank"}>
              <Image
                src={"/images/anewgo.jpg"}
                alt={"Anewgo Project Image"}
                width={500}
                height={500}
                className={"rounded-2xl my-auto"}
              />
            </a>
          </div>
        }
        rightContent={
          <div
            className={
              "w-2/3 flex-col justify-center items-center text-gray-dark"
            }
          >
            <p className={"text-2xl font-bold text-center"}>
              {t("Web2.Anewgo.title")}
            </p>
            <p className={"text-center mt-4 text-xl"}>
              {t("Web2.Anewgo.period")}
            </p>
            <p className={"text-center mt-4"}>
              {t("Web2.Anewgo.description.one")}
            </p>
            <p className={"text-center mt-4"}>
              {t("Web2.Anewgo.description.two")}
            </p>
            <p className={"text-center mt-4"}>
              {t("Web2.Anewgo.description.three")}
            </p>
            <p className={"text-center mt-4"}>
              {t("Web2.Anewgo.technologies")}
            </p>
            <div className={"flex items-center justify-center w-full py-4"}>
              <a href={"https://anewgo.com"} target={"_blank"}>
                <Button variant={"primary"}>{t("Common.link")}</Button>
              </a>
            </div>
          </div>
        }
        bgColor={"violet-light"}
      />
      <PageSection
        leftContent={
          <div className={"flex justify-center"}>
            <div
              className={
                "w-2/3 flex-col justify-center items-center text-gray-light"
              }
            >
              <p className={"text-2xl font-bold text-center"}>
                {t("Web2.Ondrasek.title")}
              </p>
              <p className={"text-center mt-4 text-xl"}>
                {t("Web2.Ondrasek.period")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web2.Ondrasek.description.one")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web2.Ondrasek.description.two")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web2.Ondrasek.description.three")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web2.Ondrasek.technologies")}
              </p>
              <div className={"flex items-center justify-center w-full py-4"}>
                <a href={"https://www.ondrasek.cz/"} target={"_blank"}>
                  <Button variant={"primary"}>{t("Common.link")}</Button>
                </a>
              </div>
            </div>
          </div>
        }
        rightContent={
          <div className={"flex justify-center items-center w-2/3"}>
            <a href={"https://www.ondrasek.cz/"} target={"_blank"}>
              <Image
                src={"/images/ondrasek.jpg"}
                alt={"Ondrasek Project Image"}
                width={500}
                height={500}
                className={"rounded-2xl my-auto"}
              />
            </a>
          </div>
        }
        bgColor={"violet-dark"}
      />
      <PageSection
        rightContent={
          <div className={"flex justify-center"}>
            <div
              className={
                "w-2/3 flex-col justify-center items-center text-gray-dark"
              }
            >
              <p className={"text-2xl font-bold text-center"}>
                {t("Web2.eMetsa.title")}
              </p>
              <p className={"text-center mt-4 text-xl"}>
                {t("Web2.eMetsa.period")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web2.eMetsa.description.one")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web2.eMetsa.description.two")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web2.eMetsa.description.three")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web2.eMetsa.technologies")}
              </p>
              <div className={"flex items-center justify-center w-full py-4"}>
                <Button variant={"primary"}>{t("Common.missingLink")}</Button>
              </div>
            </div>
          </div>
        }
        leftContent={
          <div className={"flex justify-center items-center w-2/3"}>
            <Image
              src={"/images/missingScreenshot.jpg"}
              alt={"emetsa Project Image"}
              width={500}
              height={500}
              className={"rounded-2xl my-auto"}
            />
          </div>
        }
        bgColor={"violet-light"}
      />
      <PageSection
        leftContent={
          <div className={"flex justify-center text-gray-light"}>
            <div className={"w-2/3 flex-col justify-center items-center"}>
              <p className={"text-2xl font-bold text-center"}>
                {t("Web2.PackDesigner.title")}
              </p>
              <p className={"text-center mt-4 text-xl"}>
                {t("Web2.PackDesigner.period")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web2.PackDesigner.description.one")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web2.PackDesigner.description.two")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web2.PackDesigner.description.three")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web2.PackDesigner.technologies")}
              </p>
              <div className={"flex items-center justify-center w-full py-4"}>
                <Button variant={"primary"}>{t("Common.missingLink")}</Button>
              </div>
            </div>
          </div>
        }
        rightContent={
          <div className={"flex justify-center items-center w-2/3"}>
            <Image
              src={"/images/missingScreenshot.jpg"}
              alt={"Pack Designer Project Image"}
              width={500}
              height={500}
              className={"rounded-2xl my-auto"}
            />
          </div>
        }
        bgColor={"violet-dark"}
      />
      <PageSection
        leftContent={
          <div className={"flex justify-center items-center w-2/3"}>
            <a href={"https://smontazi.cz/"} target={"_blank"}>
              <Image
                src={"/images/SMontazi.jpg"}
                alt={"Smontazi Project Image"}
                width={500}
                height={500}
                className={"rounded-2xl my-auto"}
              />
            </a>
          </div>
        }
        rightContent={
          <div
            className={
              "w-2/3 flex-col justify-center items-center text-gray-dark"
            }
          >
            <p className={"text-2xl font-bold text-center"}>
              {t("Web2.Smontazi.title")}
            </p>
            <p className={"text-center mt-4 text-xl"}>
              {t("Web2.Smontazi.period")}
            </p>
            <p className={"text-center mt-4"}>
              {t("Web2.Smontazi.description.one")}
            </p>
            <p className={"text-center mt-4"}>
              {t("Web2.Smontazi.description.two")}
            </p>
            <p className={"text-center mt-4"}>
              {t("Web2.Smontazi.description.three")}
            </p>
            <p className={"text-center mt-4"}>
              {t("Web2.Smontazi.technologies")}
            </p>
            <div className={"flex items-center justify-center w-full py-4"}>
              <a href={"https://smontazi.cz/"} target={"_blank"}>
                <Button variant={"primary"}>{t("Common.link")}</Button>
              </a>
            </div>
          </div>
        }
        bgColor={"violet-light"}
      />
    </div>
  );
}
