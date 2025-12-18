/**
 * WCAG tokens centralize numeric requirements so enhancements stay
 * consistent and easy to update as the guidelines evolve.
 */
export const WCAG_TOKENS = {
  targetSize: {
    /**
     * WCAG 2.2 AA — Success Criterion 2.5.8 Target Size (Minimum)
     * mandates a 24px minimum for interactive controls.
     */
    minimum: 50,
  },
} as const

/**
 * Convenience accessor that exposes the minimum target size in CSS units.
 */
export const WCAG_TARGET_SIZE_MIN = `${WCAG_TOKENS.targetSize.minimum}px` as const

