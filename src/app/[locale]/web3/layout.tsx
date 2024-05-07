import { locales } from "@/i18n";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    applicationName: t("common.applicationName"),
    keywords: t("common.keywords"),
    authors: [{ name: t("common.authors") }],
    publisher: t("common.publisher"),
    robots: "index, follow",
    icons: "/images/Icon.svg",
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
