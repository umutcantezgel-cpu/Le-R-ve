---
name: Le Rêve - Ein Wahrer Traum
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#424843'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#727973'
  outline-variant: '#c2c8c1'
  surface-tint: '#496453'
  primary: '#496453'
  on-primary: '#ffffff'
  primary-container: '#8ca995'
  on-primary-container: '#243e2f'
  inverse-primary: '#b0ceb8'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#5f5e5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#a4a29e'
  on-tertiary-container: '#393936'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbead4'
  primary-fixed-dim: '#b0ceb8'
  on-primary-fixed: '#062013'
  on-primary-fixed-variant: '#324c3c'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e5e2dd'
  tertiary-fixed-dim: '#c9c6c2'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#474743'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 24px
  container-padding-desktop: 80px
  gutter: 24px
  section-gap: 120px
---

## Brand & Style

The design system embodies a "Sanctuary of Serenity," specifically tailored for women and expectant mothers seeking a premium wellness escape. The brand personality is deeply maternal yet sophisticated, blending professional therapeutic expertise with an atmosphere of high-end indulgence.

The visual direction is a hybrid of **Minimalism** and **Glassmorphism**, emphasizing airiness, soft lighting, and tactile luxury. This is achieved through:
- **Atmospheric Depth:** Utilizing translucent layers to mimic the vapor and soft lighting of a high-end spa.
- **Organic Precision:** A balance of soft, organic shapes and thin, structured gold accents.
- **Quiet Luxury:** A focus on generous whitespace and high-quality typography to ensure the interface never feels crowded or stressful.

## Colors

The palette is designed to lower the user's heart rate upon interaction, drawing from natural, earthy elements and noble finishes.

- **Sage Green (#8CA995):** The primary brand anchor. Used for primary actions, success states, and subtle background washes. It represents growth, health, and tranquility.
- **Noble Gold (#D4AF37):** The accent of prestige. Used sparingly for headings, interactive iconography, and decorative borders. It should never be used for body text to maintain legibility.
- **Cream & Beige Tiers:** 
  - `Background`: #F5F2ED (Warm Cream) provides a softer alternative to stark white.
  - `Surface`: #FAF9F6 (Soft White) for cards and containers to create subtle contrast against the cream background.
- **Text:** Neutral #4A4A4A is used for body copy to ensure a softer, more premium look than pure black.

## Typography

The typography strategy pairs a high-contrast serif with a modern, friendly sans-serif to bridge the gap between "Luxurious Tradition" and "Modern Wellness."

- **Headings:** **Playfair Display** is used for all editorial and structural headings. Its delicate serifs and variable stroke widths evoke a sense of heritage and high-end fashion.
- **Body & UI:** **Plus Jakarta Sans** is chosen for its soft, rounded terminals and exceptional legibility. It feels approachable and clean, perfect for health-related information and booking flows.
- **Hierarchy Note:** Use `label-caps` in Sage Green or Gold for eyebrow headings (e.g., "UNSERE BEHANDLUNGEN") to establish a clear content structure.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a boutique, editorial feel, while transitioning to a fluid model on mobile.

- **Vertical Rhythm:** A very generous 8px base unit is used. Sections should have significant breathing room (`section-gap`) to prevent the user from feeling overwhelmed.
- **Grid:** A 12-column grid on desktop with wide 80px margins. On mobile, a 4-column grid with 24px margins ensures touch targets are comfortable for pregnant users who may require higher accessibility standards.
- **Alignment:** Central alignment is preferred for hero sections and introductory text to enhance the feeling of balance and "Zen."

## Elevation & Depth

This design system avoids heavy, dark shadows in favor of **Tonal Layering** and **Glassmorphism**.

- **Surface Treatment:** Primary containers use a "Frosted Glass" effect: 60% opacity white background with a 16px backdrop blur. This allows the warm background colors to bleed through softly.
- **Shadows:** Only "Ambient Shadows" are permitted—highly diffused (32px+ blur), low opacity (5-8%), with a slight tint of Sage Green (#8CA995) to maintain color harmony.
- **Accent Framing:** Use ultra-thin (1px) borders in Noble Gold or a 20% opacity Sage Green to define shapes without creating visual "weight."

## Shapes

The shape language is organic and soft, avoiding sharp angles to reinforce the "Dream" (Le Rêve) aesthetic.

- **Corners:** Components like cards and buttons use a default `rounded-md` (8px). 
- **Large Containers:** Image carousels and main content sections use `rounded-xl` (24px) to create a "cocoon" effect.
- **Buttons:** Modern "Squircle" or Pill-shapes are used for secondary actions, while primary buttons maintain a consistent `rounded-lg` (16px) for a professional look.

## Components

- **Buttons:** 
    - *Primary:* Solid Sage Green with white text, 16px corner radius. On hover, a subtle Gold 1px border appears.
    - *Secondary:* Ghost style with a Gold border and Playfair Display text.
- **Cards (Behandlungs-Karten):** 
    - Use the Glassmorphism effect (backdrop-blur) with a thin Gold top-border.
    - Images within cards should have a subtle 0.98 scale transition on hover.
- **Input Fields:** 
    - Soft beige background (#F5F2ED) with no border, only a bottom stroke in Sage Green that thickens on focus.
- **Chips/Filters:** 
    - Pill-shaped, using 10% opacity Sage Green for the "unselected" state and solid Sage for "selected."
- **Gold Frames:** 
    - A signature component: An 8px inset border using a Gold gradient, used primarily for hero images or testimonial highlights.
- **Specialty Component - "The Dream Tracker":** 
    - A progress bar for multi-session packages, styled as a fading gradient from Sage Green to Gold.