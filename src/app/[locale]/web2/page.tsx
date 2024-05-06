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
          <Image
            src={"/images/Anewgo.jpg"}
            alt={"Image 1"}
            width={500}
            height={500}
          />
        }
        rightContent={
          <div>
            <p>{t("Web2.Anewgo.period")}</p>
          </div>
        }
        bgColor={"violet-light"}
      />
    </div>
  );
}
