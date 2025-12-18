import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindcssAnimate from 'tailwindcss-animate'

const spacingScale = {
  '3xs': 'var(--space-3xs)',
  '2xs': 'var(--space-2xs)',
  xs: 'var(--space-xs)',
  sm: 'var(--space-sm)',
  md: 'var(--space-md)',
  lg: 'var(--space-lg)',
  xl: 'var(--space-xl)',
  '2xl': 'var(--space-2xl)',
  '3xl': 'var(--space-3xl)',
  '4xl': 'var(--space-4xl)',
  '5xl': 'var(--space-5xl)',
  '6xl': 'var(--space-6xl)',
  0: '0px',
  '0.5': 'var(--space-3xs)',
  1: 'var(--space-2xs)',
  '1.5': 'calc(var(--space-2xs) + var(--space-3xs))',
  2: 'var(--space-xs)',
  '2.5': 'calc(var(--space-xs) + var(--space-3xs))',
  3: 'var(--space-sm)',
  '3.5': 'calc(var(--space-sm) + var(--space-3xs))',
  4: 'var(--space-md)',
  5: 'calc(var(--space-md) + var(--space-2xs))',
  6: 'var(--space-lg)',
  7: 'calc(var(--space-lg) + var(--space-2xs))',
  8: 'var(--space-xl)',
  9: 'calc(var(--space-xl) + var(--space-2xs))',
  10: 'calc(var(--space-xl) + var(--space-sm))',
  11: 'calc(var(--space-xl) + var(--space-sm) + var(--space-3xs))',
  12: 'var(--space-2xl)',
}

const fontSizeScale = {
  xs: ['var(--font-size-xs)', { lineHeight: 'var(--line-height-xs)' }],
  sm: ['var(--font-size-sm)', { lineHeight: 'var(--line-height-sm)' }],
  base: ['var(--font-size-md)', { lineHeight: 'var(--line-height-md)' }],
  lg: ['var(--font-size-lg)', { lineHeight: 'var(--line-height-lg)' }],
  xl: ['var(--font-size-xl)', { lineHeight: 'var(--line-height-xl)' }],
  '2xl': [
    'var(--font-size-2xl)',
    { lineHeight: 'var(--line-height-2xl)', letterSpacing: 'var(--letter-spacing-tight)' },
  ],
  '3xl': [
    'var(--font-size-3xl)',
    { lineHeight: 'var(--line-height-3xl)', letterSpacing: 'var(--letter-spacing-tight)' },
  ],
  '4xl': [
    'var(--font-size-4xl)',
    { lineHeight: 'var(--line-height-4xl)', letterSpacing: 'var(--letter-spacing-tight)' },
  ],
  '5xl': [
    'var(--font-size-5xl)',
    { lineHeight: 'var(--line-height-5xl)', letterSpacing: 'var(--letter-spacing-tight)' },
  ],
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
      },
    },
    extend: {
      spacing: spacingScale,
      borderRadius: {
        none: 'var(--radius-none)',
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
        pill: 'var(--radius-pill)',
        DEFAULT: 'var(--radius)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      height: {
        'control-sm': 'var(--control-height-sm)',
        control: 'var(--control-height-md)',
        'control-lg': 'var(--control-height-lg)',
        switch: 'var(--switch-height)',
      },
      minHeight: {
        'control-sm': 'var(--control-height-sm)',
        control: 'var(--control-height-md)',
        'control-lg': 'var(--control-height-lg)',
        textarea: 'var(--textarea-min-height)',
      },
      width: {
        'control-sm': 'var(--control-height-sm)',
        control: 'var(--control-height-md)',
        'control-lg': 'var(--control-height-lg)',
        switch: 'var(--switch-width)',
      },
      size: {
        'icon-2xs': 'var(--icon-size-2xs)',
        'icon-xs': 'var(--icon-size-xs)',
        'icon-sm': 'var(--icon-size-sm)',
        'icon-md': 'var(--icon-size-md)',
        'icon-lg': 'var(--icon-size-lg)',
      },
      fontWeight: {
        normal: 'var(--font-weight-regular)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },
      letterSpacing: {
        tighter: 'calc(var(--letter-spacing-tight) * 1.5)',
        tight: 'var(--letter-spacing-tight)',
        normal: 'var(--letter-spacing-normal)',
        wide: 'var(--letter-spacing-wide)',
      },
      fontSize: fontSizeScale,
    },
  },
  plugins: [tailwindcssAnimate],
}

