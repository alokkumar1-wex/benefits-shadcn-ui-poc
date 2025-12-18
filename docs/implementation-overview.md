# Benefits BSharp UI — Implementation Overview

This document captures the end-to-end setup for the Benefits BSharp shared design system, detailing the key decisions, file structure, and component conventions introduced during the initial implementation.

## 1. Project Foundation

- **Framework**: React 19 + Vite + TypeScript in strict mode (`tsconfig.app.json`).
- **State of the art tooling**: Tailwind CSS 3.4, Radix primitives via shadcn/ui, and supporting utilities (CVA, tailwind-merge, clsx).
- **Path aliases**: `@`, `@/components`, `@/hooks`, `@/lib`, `@/styles` configured in `tsconfig.*` and `vite.config.ts`.
- **Global styles**: `src/styles/globals.css` is the single point of truth for Tailwind layers and CSS variables.

## 2. Directory Structure

```
src/
 ├── components/ui/      # shadcn/ui components (source of truth)
 ├── hooks/              # shared React hooks
 ├── lib/                # utilities like `cn`
 ├── styles/             # Tailwind + token definitions
 ├── index.ts            # public API surface
 ├── main.tsx            # app bootstrap wiring
 └── App.tsx             # placeholder landing page
```

- The structure mirrors the shadcn/ui CLI expectations to keep future component updates seamless.
- `src/index.ts` re-exports all primitives to guarantee backwards-compatible module consumption.

## 3. Design Tokens & Theming

**File**: `src/styles/globals.css`

- Declares light and dark themes via CSS variables (`--background`, `--primary`, etc.).
- Covers colors, radii, spacing scales, typography, and component metrics (control heights, icon sizes, switch dimensions, textarea minimum height).
- Tailwind consumes these tokens through `tailwind.config.js`, keeping utilities in sync with the design language:
  - `extend.colors` resolves to `hsl(var(--token))`.
  - `spacing`, `borderRadius`, `fontFamily`, `fontWeight`, `letterSpacing`, and custom `size` map directly to the variables.

**Result**: No component references raw hex codes or arbitrary spacing—everything is token-driven and theme-ready.

## 4. Tailwind Configuration

- `darkMode: ['class']` keeps dark theme opt-in via the `dark` class.
- `content` scans `index.html` and all source files for Tailwind usage.
- Custom spacing/typography scales align Tailwind utilities with the tokenized design system.
- `tailwindcss-animate` plugin supports shadcn’s animation helpers.

## 5. Component Implementation

Source: `src/components/ui/*`

- Components installed via `npx shadcn add ...` and then aligned with the token scale (spacing, sizing, colors).
- Each component includes inline accessibility comments documenting:
  - Keyboard interactions.
  - Screen reader expectations.
  - Known considerations when composing or extending.
- Forward refs, `asChild` support, and Radix-provided behavior are preserved to maintain accessibility guarantees.
- No inline styles; styling is fully token/Tailwind-based.

### Core Components Added

- Buttons, Inputs, Textareas.
- Form controls: Checkbox, RadioGroup, Select, Switch.
- Overlays & interactions: Tooltip, Dialog, DropdownMenu, Toast (with `Toaster` helper).
- Data display: Table.

## 6. Utilities & Hooks

- `src/lib/utils.ts`: Exposes a `cn` helper combining `clsx` + `tailwind-merge`.
- `src/hooks/use-toast.ts`: Manages toast state (inspired by shadcn) with TypeScript-friendly action constants.

## 7. Public API Surface

- `src/index.ts` re-exports utilities, hooks, components, and toast-related types.
- Consumers import from `@/index`, ensuring no deep imports and enabling versioned stability.

## 8. Governance & Documentation

- `README.md` rewritten to cover philosophy, stack, usage, extension guidelines, accessibility requirements, and governance workflow.
- The README also outlines dos/don’ts for module teams and the contribution process (tickets → PR → review).

## 9. Quality Assurance

- `npm run build` validates TypeScript + Vite production output.
- `npm run lint` ensures ESLint passes (with a scoped disable for the button module’s CVA export).

## 10. Future Enhancements

- Optional Storybook integration for component previews and visual regression testing.
- Automated accessibility checks (axe, Storybook a11y) within CI.
- Token documentation site or playground for cross-team discovery.

---

This overview, combined with the inline component comments and README governance section, should equip new contributors with the context needed to extend the design system safely.

