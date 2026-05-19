import { siteConfig } from "../config/site.config";
import { sectionsConfig } from "../config/sections.config";
import { templatesConfig } from "../config/templates.config";
import { useTheme } from "../hooks/useTheme";
import { templateRegistry } from "../templates/templateRegistry";

export function App() {
  const theme = useTheme();
  const enabledSections = sectionsConfig.filter((section) => section.enabled);
  const navLinks = sectionsConfig.filter(
    (section) => section.href && section.showInNav !== false,
  );
  const activeTemplate = siteConfig.template || templatesConfig.defaultTemplate;
  const Template =
    templateRegistry[activeTemplate] ||
    templateRegistry[templatesConfig.defaultTemplate];

  return (
    <Template
      brand={siteConfig.name}
      navLinks={navLinks}
      sections={enabledSections}
      theme={theme}
    />
  );
}
