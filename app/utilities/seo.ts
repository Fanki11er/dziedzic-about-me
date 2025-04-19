import { Metadata } from "next";
import { globalSeoQuery } from "../graphql/globalSeoQuery";
import { GlobalSEO, PageMeta } from "../types/types";
import { performRequest } from "../lib/datocms";
import { pageMetaQuery } from "../graphql/pageMetaQuery";

export const getPageMetadata = async (page: string) => {
  const { pageSeo } = await performRequest<PageMeta>(pageMetaQuery(page));
  return {
    title: pageSeo.pageName,
    description: pageSeo.description || "",
  };
};

export const getGlobalMetadata = async (): Promise<Metadata> => {
  const {
    globalSeo: { globalSeo },
  } = await performRequest<GlobalSEO>(globalSeoQuery);
  return {
    authors: [
      {
        name: "Krzysztof Dziedzic",
      },
    ],
    description: globalSeo.description,
    applicationName: "About Me",
    keywords: [
      "Portfolio",
      "Krzysztof Dziedzic",
      "Frontend Developer",
      "Ract",
      "Next",
      "Projects",
      "Contact",
      "About",
    ],
    openGraph: {
      type: "website",
      images: [
        {
          url: globalSeo.image.url,
          alt: globalSeo.image.alt,
          width: globalSeo.image.width,
          height: globalSeo.image.height,
        },
      ],
    },
  };
};
