import SitewidePages from "@/components/pages/SitewidePages";
import { sitewidePages } from "@/content/sitewideLoader";
import { notFound } from "next/navigation";

type SitewideSlug = keyof typeof sitewidePages;

type SitewidePageProps = Promise<{
  sitewide: SitewideSlug;
}>;

export default async function SitewidePage(props: {
  params: SitewidePageProps;
}) {
  const { sitewide } = await props.params;
  const content = sitewidePages[sitewide];

  if (!content) return notFound();

  return <SitewidePages content={content} />;
}
