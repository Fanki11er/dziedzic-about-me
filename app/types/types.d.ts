export type PictureWithAlt = {
  alt: string;
  url: string;
};

export type SkillType = {
  id: string;
  technologyName: string;
  level: string;
  skills: { skillDescription: string; id: string }[];
  logo: {
    alt: string;
    url: string;
  };
};

export type ProjectType = {
  position: string;
  projectName: string;
  projectDescription: string;
  appLink: string;
  githubLink: string;
  credentials: [
    {
      password: string;
      username: string;
    }
  ];
  projectPreview: PictureWithAlt;
};

export type AboutContentParagraph = {
  paragraph: string;
  id: string;
};

export type SingleAdditionalSkill = {
  additionalSkill: string;
  id: string;
};

export type PageMeta = {
  pageSeo: {
    path: string;
    pageName: string;
    description?: string;
  };
};

export type GlobalSEO = {
  globalSeo: {
    globalSeo: {
      description: string;
      image: {
        url: string;
        alt: string;
        width: string;
        height: string;
      };
    };
  };
};

export type SubmitStatus = "SUCCESS" | "ERROR" | "PENDING" | "NONE";
