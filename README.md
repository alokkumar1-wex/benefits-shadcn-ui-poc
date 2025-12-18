# Benefits BSharp Design System

Shared React component library that powers every Benefits module. It is built on React, TypeScript, Vite, Tailwind CSS, and shadcn/ui (Radix primitives under the hood). This repo is the single source of truth—module teams consume components exclusively through `src/index.ts`.

## Core Philosophy

- Mirror the official shadcn/ui structure so the CLI can keep generating updates without manual patches.
- Treat Tailwind CSS variables as design tokens. No component hardcodes colors, spacing, or typography.
- Prefer extensibility over abstraction. Composition and variant props beat bespoke wrappers.
- Accessibility is a release blocker. Every component must meet WCAG 2.2 AA and expose keyboard and screen reader affordances.

## Stack & Project Layout

- React 19 + TypeScript (strict) via Vite.
- Tailwind CSS with tokens declared in `src/styles/globals.css`.
- shadcn/ui CLI with components living in `src/components/ui`.
- Utilities in `src/lib`, shared hooks in `src/hooks`.
- Public export surface at `src/index.ts` (no deep imports).

## Getting Started

```bash
npm install
npm run dev
```

Key aliases:

- `@/components` → `src/components`
- `@/hooks` → `src/hooks`
- `@/lib` → `src/lib`
- `@/styles` → `src/styles`

Import components from the root entry point:

```ts
import { Button, Dialog, useToast } from "@/index"
```

## Public API & Import Rules

- `src/index.ts` is the single, stable export surface for the design system. Every module team should import exclusively from this file (or from the published package root) to guarantee predictable upgrade paths.
- Our ESLint configuration blocks deep imports such as `@/components/ui/*`, `@/hooks/*`, or `@/lib/*` outside of the design system implementation. Violations fail CI with a clear error message: “Import from the design system public API instead of internal paths.”
- **Allowed**:
  - `import { Button } from "@/index"`
  - `import { Button } from "benefits-bsharp-ui"`
- **Forbidden**:
  - `import { Button } from "@/components/ui/button"`
  - `import { useToast } from "@/hooks/use-toast"`
- When a new primitive is added, re-export it from `src/index.ts` and update consuming apps to reference only the public API.

## Design Tokens & Theming

- Semantic tokens are declared in `src/styles/tokens.css` (`--color-bg`, `--space-sm`, `--radius-md`, typography scales, etc.).
- Theme files (`src/styles/themes.css`) assign token values for the light `:root` contract and the `.dark` override—components never reference themes directly.
- `src/styles/globals.css` imports tokens and themes, then applies baseline element styles (`bg-background`, `text-foreground`, font stacks).
- Tailwind is configured in `tailwind.config.js` to resolve utilities like `bg-background`, `text-muted-foreground`, and `border` from the token variables, so utilities stay in sync across themes.
- When adding new styling primitives, introduce a semantic token first (in `tokens.css`), set values per theme (in `themes.css`), and only then expose utilities/components that consume it.

## Adding a New Component

1. Use the shadcn CLI so the registry stays the source of truth:
   ```bash
   npx shadcn@latest add <component-name>
   ```
2. Customize spacing, colors, and typography with the existing tokens—no inline styles or new design scales.
3. Add accessibility notes directly in the component file (keyboard behavior, screen reader expectations, known caveats).
4. Re-export the component from `src/index.ts`.
5. Add minimal examples or stories where appropriate (in module teams, not here).

## Extending vs Overriding

- **Extend** when shadcn provides a variant or slot (e.g., add a `variant` to `buttonVariants`, compose with `asChild`).
- **Wrap** when you need domain logic (e.g., a Benefit-specific wizard). Keep wrappers outside `src/components/ui`.
- **Do not fork** the base component. Instead, contribute improvements upstream (token updates, accessibility fixes).
- When design requirements diverge heavily, create a new component via the CLI rather than mutating an existing one.

## Accessibility Standards

- WCAG 2.2 AA minimum for color contrast and interactive behavior.
- Visible focus states on every focusable element (`focus-visible` utilities already wired in).
- Keyboard parity with native controls (Space/Enter activation, Escape close, arrow key navigation).
- Screen reader announcements backed by ARIA attributes, `aria-live` regions, or semantic HTML.
- Verify with automated tooling (`@axe-core/react`, Storybook a11y addons) before submitting changes.

## Module Team Guidelines

**Do**
- Import exclusively from `@/index` and keep version parity across modules.
- Build module-specific compositions (pages, flows) outside of `src/components/ui`.
- Contribute token or component improvements back through pull requests reviewed by the design system working group.
- Write tests and visual diff coverage when introducing new UI primitives.

**Do Not**
- Modify files under `src/components/ui` without coordinating with the design system maintainers.
- Add new design tokens that conflict with existing scales.
- Ship hardcoded colors, magic numbers, or custom spacing values inside modules.
- Skip accessibility testing or bypass the documented governance process.

## Governance & Contribution Workflow

1. Open a ticket describing the change (component addition, token update, bug fix).
2. Prototype locally using the shadcn CLI and token system.
3. Submit a PR referencing the ticket. Include accessibility notes, screenshots, and manual testing steps.
4. At least one design system maintainer reviews for API stability, accessibility, and token adherence.
5. Once merged, downstream module teams pull the latest main branch and consume the updated exports.

By following these rules we guarantee a stable, scalable design system that stays true to shadcn/ui while meeting enterprise accessibility and governance standards. Reach out to the design system working group for any deviations or RFCs.
