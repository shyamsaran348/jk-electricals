---
name: Industrial Precision
colors:
  surface: '#f7fafc'
  surface-dim: '#d7dadc'
  surface-bright: '#f7fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f6'
  surface-container: '#ebeef0'
  surface-container-high: '#e5e9eb'
  surface-container-highest: '#e0e3e5'
  on-surface: '#181c1e'
  on-surface-variant: '#44464e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f3'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4c5e86'
  primary: '#00081e'
  on-primary: '#ffffff'
  primary-container: '#0a1f44'
  on-primary-container: '#7687b2'
  inverse-primary: '#b4c6f4'
  secondary: '#545f72'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f7'
  on-secondary-container: '#586377'
  tertiary: '#00081c'
  on-tertiary: '#ffffff'
  tertiary-container: '#001f49'
  on-tertiary-container: '#4d87e6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b4c6f4'
  on-primary-fixed: '#041a3f'
  on-primary-fixed-variant: '#34466d'
  secondary-fixed: '#d8e3fa'
  secondary-fixed-dim: '#bcc7dd'
  on-secondary-fixed: '#111c2c'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#d7e2ff'
  tertiary-fixed-dim: '#acc7ff'
  on-tertiary-fixed: '#001a40'
  on-tertiary-fixed-variant: '#004491'
  background: '#f7fafc'
  on-background: '#181c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  max-width: 1440px
---

## Brand & Style

This design system embodies the principles of "Industrial Modernism"—a style that prioritizes clarity, structural integrity, and enterprise-grade reliability. The brand personality is authoritative and engineering-led, designed to evoke a sense of immense scale, precision, and unwavering trust. 

The aesthetic deviates from transient startup trends by utilizing a **Corporate Modern** approach. It leans into high-quality white space, rigorous grid alignment, and a "form follows function" philosophy. The UI should feel like a physical control center: robust, clear, and high-performance. Visual weight is communicated through deliberate typographic hierarchy and solid fills rather than decorative effects.

The target audience consists of procurement officers, industrial engineers, and corporate executives who value efficiency and long-term stability over novelty.

## Colors

The palette is anchored by **Deep Navy Blue**, representing the foundation and stability of heavy industry. **Industrial Gray** serves as a utilitarian bridge for secondary information and borders, while **Electric Blue** is reserved strictly for interactive elements and primary calls to action to ensure high discoverability.

The background uses a tiered approach: pure **White** for primary content cards and elevated surfaces, and **Light Gray** for the underlying application canvas to reduce eye strain during long-duration enterprise tasks. 

**Color Usage Rules:**
- **Deep Navy:** Used for headers, primary typography, and structural navigation components.
- **Electric Blue:** Used for buttons, active states, and progress indicators.
- **Surface Tiers:** Use #FFFFFF for components and #F7FAFC for page backgrounds to create a subtle, clean contrast without relying on heavy shadows.

## Typography

The design system utilizes **Inter** exclusively across all levels to achieve a systematic, technical appearance. Inter provides the necessary "ink traps" and neutral grotesque forms that ensure legibility in data-dense industrial dashboards and technical specifications.

**Headlines:** Utilize semi-bold and bold weights with slightly negative letter spacing to create a compact, "heavy-duty" feel.
**Body:** Standardized at 16px for optimal readability across enterprise hardware. 
**Labels:** Use medium or semi-bold weights with increased letter-spacing in all-caps or title case for metadata, status tags, and technical identifiers. 
**Scaling:** Large display headings must scale down significantly for mobile devices to maintain a professional, non-overwhelming appearance.

## Layout & Spacing

This design system employs a **Fixed-Fluid Hybrid Grid**. Content is housed within a 12-column grid with a maximum container width of 1440px to ensure readability on ultra-wide monitors common in industrial control rooms. 

The spacing rhythm is based on a **4px baseline grid**. 
- **Desktop:** 48px outer margins with 24px gutters provide a spacious, premium feel that avoids the "clutter" of legacy enterprise software.
- **Mobile:** Margins reduce to 16px, and the 12-column grid collapses into a single-column stack.
- **Sectioning:** Use large vertical gaps (80px - 120px) between major content sections to emphasize a high-end, uncluttered layout.

## Elevation & Depth

To maintain a clean, "High Trust" aesthetic, the system avoids heavy shadows and complex gradients. Depth is instead conveyed through:

1.  **Low-Contrast Outlines:** Components like cards and input fields use a 1px solid border in a soft gray (#E2E8F0).
2.  **Tonal Layering:** Interactive elements sit on top of a #F7FAFC background using a pure #FFFFFF surface.
3.  **Minimal Ambient Shadows:** Only the most critical interactive elements (like dropdown menus or modals) utilize a very soft, diffused shadow (0px 4px 12px rgba(10, 31, 68, 0.05)). This prevents the UI from feeling "floaty" and keeps it grounded in professional utility.
4.  **State-based Depth:** On hover, elements may gain a slightly more defined border or a subtle fill change rather than a large shadow lift.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a subtle modern refinement to industrial hardware's traditional sharp edges without becoming overly friendly or "consumer-grade." 

- **Primary Components:** Buttons, input fields, and tags use a 4px (0.25rem) radius.
- **Large Containers:** Cards and modals use an 8px (0.5rem) radius.
- **Consistency:** Rounding is applied uniformly to all corners to maintain a systematic, engineering-led appearance. Icons should follow this logic, utilizing 2px or 4px corner radii within their paths where applicable.

## Components

**Buttons:** 
- *Primary:* Solid Deep Navy background with White text. Bold, rectangular, and high-contrast. 
- *Secondary:* Electric Blue border with Electric Blue text. 
- *Sizes:* Default height is 44px for accessibility in industrial environments.

**Input Fields:**
- Large 44px height, 1px solid border (#E2E8F0), and 16px horizontal padding. Labels are always positioned above the field in `label-sm` style for clarity.

**Cards:**
- White background (#FFFFFF), 1px border (#E2E8F0), 24px padding. No shadows unless the card is interactive/hoverable.

**Chips & Tags:**
- Used for status (e.g., "Operational", "Maintenance"). Rectangular with a 4px radius. Use light tinted backgrounds with dark text for high legibility (e.g., Light Green background with Dark Green text).

**Lists & Data Tables:**
- High-density layouts with subtle horizontal dividers. Zebra-striping using #F7FAFC is recommended for large datasets. Header rows should be Deep Navy or a very dark gray with uppercase labels.

**Progress Indicators:**
- Linear, 4px height, utilizing the Electric Blue (#0056B3) accent to indicate active processes and system health.