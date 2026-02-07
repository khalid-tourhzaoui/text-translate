// ============================================
// TAILWIND CONFIG - Enhanced Neobrutalist
// ============================================

import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      /* Original shadcn colors */
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },

        /* Neobrutalist Brand Colors */
        'brand-orange': 'hsl(var(--brand-orange))',
        'brand-yellow': 'hsl(var(--brand-yellow))',
        'brand-pink': 'hsl(var(--brand-pink))',
        'brand-blue': 'hsl(var(--brand-blue))',
        'brand-green': 'hsl(var(--brand-green))',
        
        'brutal-black': 'hsl(var(--brutal-black))',
        'brutal-border': 'hsl(var(--brutal-border))',
        'brutal-white': 'hsl(var(--brutal-white))',
        'brutal-cream': 'hsl(var(--brutal-cream))',
      },

      /* Border Radius */
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'brutal-sm': '0.5rem',    // 8px
        'brutal-md': '0.75rem',   // 12px
        'brutal-lg': '1rem',      // 16px
        'brutal-xl': '1.5rem',    // 24px
        'brutal-2xl': '2rem',     // 32px
      },

      /* Border Width */
      borderWidth: {
        '3': '3px',
        '6': '6px',
        '8': '8px',
      },

      /* Box Shadow - Neobrutalist */
      boxShadow: {
        'brutal-xs': '0px 1px 0px 0px rgba(0, 0, 0, 0.9)',
        'brutal-sm': '0px 2px 0px 0px rgba(0, 0, 0, 0.9)',
        'brutal-md': '0px 4px 0px 0px rgba(0, 0, 0, 0.9)',
        'brutal-lg': '0px 8px 0px 0px rgba(0, 0, 0, 0.9)',
        'brutal-xl': '0px 12px 0px 0px rgba(0, 0, 0, 0.9)',
        'brutal-2xl': '0px 16px 0px 0px rgba(0, 0, 0, 0.9)',
        
        // Hover states
        'brutal-sm-hover': '0px 4px 0px 0px rgba(0, 0, 0, 0.9)',
        'brutal-md-hover': '0px 6px 0px 0px rgba(0, 0, 0, 0.9)',
        'brutal-lg-hover': '0px 12px 0px 0px rgba(0, 0, 0, 0.9)',
        'brutal-xl-hover': '0px 16px 0px 0px rgba(0, 0, 0, 0.9)',
        
        // With blur (soft brutal)
        'brutal-soft-sm': '0px 4px 0px 0px rgba(0, 0, 0, 0.9), 0px 8px 16px -4px rgba(0, 0, 0, 0.35)',
        'brutal-soft-md': '0px 8px 0px 0px rgba(0, 0, 0, 0.9), 0px 16px 26px -12px rgba(0, 0, 0, 0.35)',
        'brutal-soft-lg': '0px 12px 0px 0px rgba(0, 0, 0, 0.9), 0px 24px 36px -16px rgba(0, 0, 0, 0.35)',
      },

      /* Font Family */
      fontFamily: {
        'display': ['var(--font-display)', 'cursive'],
        'body': ['var(--font-body)', 'sans-serif'],
        'sans': ['var(--font-geist-sans)', 'sans-serif'],
        'mono': ['var(--font-geist-mono)', 'monospace'],
      },

      /* Font Size - Extended */
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.875rem' }],      // 10px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],       // 30px
        '10xl': ['10rem', { lineHeight: '1' }],               // 160px
        '11xl': ['12rem', { lineHeight: '1' }],               // 192px
      },

      /* Spacing - Extended */
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '128': '32rem',   // 512px
        '144': '36rem',   // 576px
      },

      /* Animation */
      animation: {
        'bounce-in': 'bounce-in 0.3s ease-out',
        'shake': 'shake 0.3s ease-in-out',
        'slide-up': 'slide-up 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },

      /* Keyframes */
      keyframes: {
        'bounce-in': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'shake': {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '25%': {
            transform: 'translateX(-5px)',
          },
          '75%': {
            transform: 'translateX(5px)',
          },
        },
        'slide-up': {
          'from': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'wiggle': {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },

      /* Gradient Color Stops */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
        // Source gradient
        'source-gradient': 'linear-gradient(to bottom right, hsl(var(--source-gradient-start)), hsl(var(--source-gradient-mid)), hsl(var(--source-gradient-end)))',
        
        // Target gradient
        'target-gradient': 'linear-gradient(to bottom right, hsl(var(--target-gradient-start)), hsl(var(--target-gradient-mid)), hsl(var(--target-gradient-end)))',
        
        // Brand gradients
        'gradient-orange-yellow': 'linear-gradient(135deg, #F97316 0%, #FACC15 100%)',
        'gradient-pink-orange': 'linear-gradient(135deg, #EC4899 0%, #F97316 100%)',
        'gradient-blue-cyan': 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
      },

      /* Z-Index */
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      /* Opacity */
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '85': '0.85',
      },

      /* Scale */
      scale: {
        '102': '1.02',
        '103': '1.03',
        '105': '1.05',
        '115': '1.15',
      },

      /* Rotate */
      rotate: {
        '6': '6deg',
        '12': '12deg',
        '15': '15deg',
      },

      /* Transition */
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },

      /* Backdrop Blur */
      backdropBlur: {
        'xs': '2px',
      },

      /* Ring Width */
      ringWidth: {
        '6': '6px',
        '8': '8px',
      },
    },
  },
  plugins: [
    require("preline/plugin"),
    addVariablesForColors,
    
    // SVG Background Patterns
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    
    require("tailwindcss-animate"),
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}