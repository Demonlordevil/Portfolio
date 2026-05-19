import { sectionRegistry } from "./sectionRegistry";

export function SectionRenderer({ sections }) {
  return sections.map((section) => {
    const registryEntry = sectionRegistry[section.id];

    if (!registryEntry) {
      return null;
    }

    const { Component, props } = registryEntry;

    return <Component key={section.id} {...props} />;
  });
}
