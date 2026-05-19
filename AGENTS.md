# AGENTS.md

Guidance for Codex and future contributors working on this portfolio system.

## Project Philosophy

This project is a customizable developer portfolio built with React, Vite, and Tailwind. It should stay scalable without becoming abstract for its own sake.

Prefer:

- Clear file boundaries over clever patterns.
- Explicit configuration over hidden behavior.
- Small reusable primitives when repetition is real.
- Iterative growth over speculative architecture.
- Theme/template extensibility without plugin-style complexity.

Avoid:

- Generic framework layers that do not solve a current problem.
- Deep component nesting for simple content.
- Moving every repeated class into an abstraction too early.
- Coupling section content directly to section UI.

## Architecture Guidelines

The current architecture follows this flow:

```txt
config/data -> section registry -> section renderer -> template -> app
```

Keep these responsibilities separate:

- `src/config`: site-level choices, section order, enabled state, template selection, theme metadata.
- `src/data`: repeatable portfolio collections such as projects and skills.
- `src/components/ui`: small reusable primitives used across sections.
- `src/components/layout`: shared layout elements such as navigation.
- `src/components/sections`: portfolio sections and section-specific subcomponents.
- `src/templates`: page-level composition only.
- `src/app`: app orchestration, registries, and rendering glue.

Do not put React components inside config files. Config should describe behavior; registries connect config IDs to components.

## Component Responsibilities

UI primitives should be small and broadly useful:

- `Button`: reusable action styling.
- `Container`: consistent page width and horizontal spacing.
- `Field`: reusable labeled form field styling.
- `ThemeToggle`: theme control UI.

Section components should own section layout, headings, spacing, and mapping over their data.

Section-specific repeated pieces can live beside the section, for example:

```txt
src/components/sections/projects/ProjectCard.jsx
src/components/sections/skills/SkillGroup.jsx
```

Only promote something into `components/ui` when it is reused across multiple sections or clearly represents a shared design primitive.

## Config And Data

Use `site.config.js` for personal/site copy:

- name
- selected template
- hero/profile content
- about content
- contact content

Use `sections.config.js` for section orchestration:

- section ID
- enabled state
- nav label/href
- render order

Use `src/data` for repeatable collections:

- projects
- skill groups
- future experience/testimonials/blog items

Model data according to what the UI needs today, but leave obvious room to add fields later. Do not introduce schemas, adapters, or CMS-style layers until real requirements appear.

## Template Philosophy

Templates control layout and composition only.

They may:

- choose the page shell
- decide how sections are grouped visually
- render sections in the order received
- add wrapper layout around rendered sections

They should not:

- own portfolio content
- fetch data
- decide which sections are enabled
- duplicate section-specific rendering logic
- import projects/skills/site content directly

The section config decides what exists. The template decides how the enabled sections are composed.

## Theme Philosophy

Themes are powered by CSS variables and semantic Tailwind color names.

Components should use semantic classes:

```txt
bg-background
text-foreground
border-border
bg-muted
text-primary
```

Avoid hardcoded palette classes like `bg-blue-600`, `text-slate-900`, or `border-gray-200` in app components unless there is a specific one-off reason.

To add a future theme:

1. Add a new `[data-theme="name"]` CSS variable block in `globals.css`.
2. Add the theme metadata to `theme.config.js`.
3. Keep components unchanged when possible.

Do not add heavy state management for themes. The current hook plus `localStorage` is sufficient.

## Styling Conventions

Use Tailwind directly in components for layout and small styling decisions.

Prefer:

- semantic theme tokens
- responsive grids
- readable spacing
- `rounded-md` or `rounded-lg` consistently
- simple hover/focus states

Avoid:

- large custom CSS files for component styles
- one-off color palettes inside sections
- complex animation systems
- layout wrappers that exist only for decoration

Keep sections visually consistent, but not forced through a generic `Section` abstraction until the duplication becomes painful.

## Scalability Rules

Add abstraction only when it removes real duplication or enables a requirement already present.

Good reasons to add abstraction:

- a repeated UI pattern appears in multiple sections
- a new template needs shared section rendering
- section order/visibility needs to be configurable
- theme behavior must be reused globally

Weak reasons:

- a pattern might be useful someday
- two components happen to look similar once
- a folder feels more "enterprise"
- a generic renderer can be invented before the use case is clear

When in doubt, make the next feature work clearly first, then extract only what proves reusable.

## Codex Implementation Guidance

Before editing:

- Inspect the nearby files and follow the existing pattern.
- Preserve config/data separation.
- Keep changes scoped to the requested feature.

When adding a new section:

1. Put repeatable content in `src/data` if it is a collection.
2. Put personal/site copy in `site.config.js` if it is singleton content.
3. Create a section component in `src/components/sections`.
4. Add section-specific subcomponents only when repeated inside that section.
5. Register the section in `sectionRegistry.jsx`.
6. Add or update its entry in `sections.config.js`.

When adding a new template:

1. Create a folder under `src/templates`.
2. Keep the template focused on composition.
3. Use `SectionRenderer` instead of manually importing section components.
4. Register the template in `templateRegistry.jsx`.
5. Add metadata in `templates.config.js`.

When adding a new theme:

1. Add CSS variables in `globals.css`.
2. Add metadata in `theme.config.js`.
3. Avoid touching section components unless a semantic token is missing.

Always verify with:

```txt
npm run lint
npm run build
```

If a change tempts you to create a broad abstraction, first ask whether the current project has enough real usage to justify it.
