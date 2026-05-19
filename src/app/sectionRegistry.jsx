import { siteConfig } from "../config/site.config";
import { posts } from "../data/blog";
import { experienceItems } from "../data/experience";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { skillGroups } from "../data/skills";
import { About } from "../components/sections/About";
import { Blog } from "../components/sections/blog/Blog";
import { Contact } from "../components/sections/Contact";
import { Experience } from "../components/sections/experience/Experience";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/projects/Projects";
import { Services } from "../components/sections/services/Services";
import { Skills } from "../components/sections/skills/Skills";
import { Testimonials } from "../components/sections/testimonials/Testimonials";

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
  services: {
    Component: Services,
    props: {
      services,
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
  experience: {
    Component: Experience,
    props: {
      items: experienceItems,
    },
  },
  testimonials: {
    Component: Testimonials,
    props: {
      testimonials: siteConfig.testimonials,
    },
  },
  blog: {
    Component: Blog,
    props: {
      posts,
    },
  },
  contact: {
    Component: Contact,
    props: {
      contact: siteConfig.contact,
    },
  },
};
