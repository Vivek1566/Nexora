---
name: LaunchNest Orbital
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4ae176'
  on-tertiary: '#003915'
  tertiary-container: '#007e37'
  on-tertiary-container: '#c1ffc5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  body-base:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
---

## Brand & Style
The design system is engineered for high-growth startup ecosystems, blending the precision of enterprise software with the visionary energy of a venture capital firm. The brand personality is **Futuristic, Professional, and Authoritative**, aimed at founders and investors who demand high-velocity data visualization and seamless management workflows.

The visual style utilizes a **Refined Glassmorphism** approach. It moves away from heavy skueomorphism toward a digital-first, layered aesthetic. Key traits include:
- **Translucent Depth:** Surfaces use backdrop blurs and subtle opacities to suggest physical layering without clutter.
- **Precision Minimalism:** Every element serves a functional purpose; decorative fluff is replaced by structural integrity and white space.
- **Micro-interactions:** Navigation and state changes utilize smooth, cubic-bezier transitions to feel responsive and high-end, mirroring the fluid nature of startup growth.

## Colors
The palette is rooted in a "Dark-themed Premium" environment. The primary background uses a near-black ink (`#020617`) to allow vibrant accents to pop with high contrast.

- **Primary & Accent:** The Deep Blue and Vibrant Violet are used for high-action areas and data visualization. A linear gradient combining both (`#2563EB` to `#8B5CF6`) is reserved for primary "hero" actions (e.g., "Launch Venture").
- **Functional Colors:** Success, Warning, and Error colors are desaturated slightly to prevent "neon fatigue" in professional contexts, ensuring they integrate cleanly with the dark UI.
- **Glass Surfaces:** Surface containers use a semi-transparent slate with a `12px` to `20px` backdrop-blur, creating a sense of "frosted obsidian."

## Typography
This design system uses **Geist** for its core typeface to achieve a technical, minimalist feel that echoes high-end developer tools.

- **Scale:** High contrast between display titles and body text creates a clear hierarchy for complex data dashboards.
- **Monospacing:** **JetBrains Mono** is introduced for labels, metadata, and status badges to reinforce the "Incubation/Technology" theme and provide clarity for numerical data.
- **Weight:** Bold weights are used sparingly for headings. Body text stays at Regular (400) for maximum legibility against dark backgrounds.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure for desktop.

- **Systematic Rhythms:** All spacing is based on a 4px baseline (4, 8, 12, 16, 24, 32, 48, 64).
- **Safe Zones:** Content containers use a maximum width of 1440px to maintain readability on ultra-wide monitors.
- **Responsive Behavior:** 
    - **Desktop:** 12 columns, 24px gutters. Sidebars are fixed at 280px.
    - **Tablet:** 8 columns, 16px gutters. Sidebars collapse to a thin icon rail.
    - **Mobile:** 4 columns, 16px margins. Navigation moves to a bottom bar or a full-screen overlay.

## Elevation & Depth
Depth is created through light rather than just shadow. 
- **Layer 0 (Base):** Background color `#020617`.
- **Layer 1 (Cards/Panels):** Tonal layers using `rgba(255, 255, 255, 0.03)` with a subtle `1px` border of `rgba(255, 255, 255, 0.1)`.
- **Layer 2 (Floating/Modals):** High-blur glass with an ambient shadow (`box-shadow: 0 20px 50px rgba(0,0,0,0.5)`).
- **Glowing Accents:** Interactive elements use a subtle outer glow (box-shadow with primary color at 20% opacity) to signify focus or active states.

## Shapes
The shape language is **Refined and Modern**.
- **Standard Radius:** 0.5rem (8px) for buttons, inputs, and standard cards.
- **Large Radius:** 1.5rem (24px) for large dashboard containers and modal windows to soften the "enterprise" feel.
- **Borders:** Ultra-thin 1px borders are mandatory on all surfaces to maintain edge definition in dark mode.

## Components
- **Buttons:** 
    - *Primary:* Linear gradient (Blue to Violet), white text, 8px radius. On hover, increase saturation and add a soft violet glow.
    - *Secondary:* Ghost style with 1px white-alpha border.
- **Floating Cards:** Use a `1px` top-border highlight (white, 15% opacity) to simulate light hitting the top edge of the card.
- **Inputs:** Darker than the surface background to create an "inset" feel. Focus state uses a 1px Primary Blue border and a soft glow.
- **Dashboard Navigation:** A vertical sidebar with high-contrast icons. Active states use a "pill" indicator and a subtle background tint.
- **Skeleton Loaders:** Instead of static grey, use a shimmering gradient that flows from `rgba(255,255,255,0.02)` to `0.08`.
- **Status Chips:** Small, pill-shaped, using the secondary font (JetBrains Mono). Text color should be a bright version of the status (e.g., bright green) with a very low-opacity background tint of the same color.