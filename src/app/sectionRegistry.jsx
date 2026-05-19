import { siteConfig } from "../config/site.config";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/projects/Projects";
import { Skills } from "../components/sections/skills/Skills";

export const sectionRegistry = {
  hero: {
    Component: Hero,
    props: {
      profile: siteConfig.profile,
    },
  },
  about: {
    Component: About,
    props: {
      about: siteConfig.about,
    },
  },
  projects: {
    Component: Projects,
    props: {
      projects,
    },
  },
  skills: {
    Component: Skills,
    props: {
      skillGroups,
    },
  },
  contact: {
    Component: Contact,
    props: {
      contact: siteConfig.contact,
    },
  },
};
