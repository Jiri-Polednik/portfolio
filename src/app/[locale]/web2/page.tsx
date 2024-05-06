import PageSection from "@components/pageSection";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

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
          <div className={"flex justify-center"}>
            <div className={"flex justify-center w-2/3"}>
              <a href={"https://anewgo.com"} target={"_blank"}>
                <Image
                  src={"/images/anewgo.jpg"}
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
            </div>
          </div>
        }
        rightContent={
          <div className={"flex justify-center items-center w-2/3"}>
            <a href={"https://www.ondrasek.cz/"} target={"_blank"}>
              <Image
                src={"/images/ondrasek.jpg"}
                alt={"Image 1"}
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
            </div>
          </div>
        }
        leftContent={
          <div className={"flex justify-center items-center w-2/3"}>
            <Image
              src={"/images/storaEnso.svg"}
              alt={"eMetsa Project Image"}
              width={300}
              height={300}
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
            </div>
          </div>
        }
        rightContent={
          <div className={"flex justify-center items-center w-2/3"}>
            <Image
              src={"/images/storaEnso.svg"}
              alt={"PackDesigner Project Image"}
              width={300}
              height={300}
              className={"rounded-2xl my-auto"}
            />
          </div>
        }
        bgColor={"violet-dark"}
      />
    </div>
  );
}
