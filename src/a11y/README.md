# Accessibility Layer

This directory hosts the composable accessibility layer that sits on top of
the raw shadcn/ui primitives. The primitives are treated as upstream source
code and must remain upgrade-safe, so every WCAG enhancement is implemented
via wrapper components that can be layered without modifying the originals.

## Principles

- **Isolation:** shadcn/ui components under `src/components/ui` stay
  untouched. All accessibility logic lives alongside wrappers in this folder.
- **Composability:** wrappers expose higher-order components that can be
  combined through `composeA11y` so future WCAG rules (focus states, contrast,
  keyboard support, etc.) can be added incrementally.
- **Public API:** consumers import from `src/enhanced/*`, never directly from
  the shadcn copies, ensuring accessibility guarantees stay in place.
- **Tokens:** WCAG requirements are expressed as tokens so values are shared,
  documented, and easy to evolve as the guidelines change.

When introducing new accessibility behaviors, add a reusable wrapper inside
`wrappers/`, define any shared constants inside `tokens/`, and compose the new
wrapper into the relevant enhanced component under `src/enhanced/`.

