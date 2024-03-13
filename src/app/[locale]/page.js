import initTranslations from "../helpers/i18n";

export default async function Home({ params: { locale } }) {
  const { t: text } = await initTranslations(locale, ["common"]);

  return <h1>{text("hello_wonder")}</h1>;
}
