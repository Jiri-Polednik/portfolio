import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import PageSection from "@components/pageSection";
import Image from "next/image";

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
        rightContent={
          <div className={"flex justify-center"}>
            <div
              className={
                "w-2/3 flex-col justify-center items-center text-gray-dark"
              }
            >
              <p className={"text-2xl font-bold text-center"}>
                {t("Web3.HodlMePlease.title")}
              </p>
              <p className={"text-center mt-4 text-xl"}>
                {t("Web3.HodlMePlease.period")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web3.HodlMePlease.description.one")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web3.HodlMePlease.description.two")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web3.HodlMePlease.technologies")}
              </p>
            </div>
          </div>
        }
        leftContent={
          <div className={"flex justify-center items-center w-full"}>
            <a
              href={"https://www.hodlmeplease.com/"}
              target={"_blank"}
              rel={"noreferrer noopener"}
            >
              <Image
                src={"/images/hodlMePlease.png"}
                alt={"eMetsa Project Image"}
                width={300}
                height={300}
                className={"rounded-2xl"}
              />
            </a>
          </div>
        }
        bgColor={"yellow-light"}
      />
      <PageSection
        leftContent={
          <div className={"flex justify-center text-gray-light"}>
            <div className={"w-2/3 flex-col justify-center items-center"}>
              <p className={"text-2xl font-bold text-center"}>
                {t("Web3.DecentralDice.title")}
              </p>
              <p className={"text-center mt-4 text-xl"}>
                {t("Web3.DecentralDice.period")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web3.DecentralDice.description.one")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web3.DecentralDice.description.two")}
              </p>
              <p className={"text-center mt-4"}>
                {t("Web3.DecentralDice.technologies")}
              </p>
            </div>
          </div>
        }
        rightContent={
          <div className={"flex justify-center items-center w-full"}>
            <Image
              src={"/images/decentralDice.svg"}
              alt={"PackDesigner Project Image"}
              width={300}
              height={300}
              className={"rounded-2xl my-auto"}
            />
          </div>
        }
        bgColor={"yellow-dark"}
      />
    </div>
  );
}
