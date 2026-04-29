# Design System: Guarda Urbana Premium

The brand identity is **High-Contrast Modern**, blending the reliability of industrial infrastructure with a premium, tech-forward "Self Storage 2.0" aesthetic. It evokes a sense of "Bank-Level Security" through heavy-weight typography and a deep charcoal foundation, contrasted with high-energy "Safety Orange" accents.

## 🎨 Color Palette

The palette is built on a high-contrast triad of Safety Orange, Deep Onyx, and Industrial Grays.

### Primary Colors
Used exclusively for primary calls to action, active status indicators, and brand accents.
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `primary` | `#b02f00` | Deepest orange/red base |
| `primary-container` | `#ff5722` | Core Safety Orange (Buttons, Accents) |
| `on-primary-container`| `#541200` | Text on top of Safety Orange |
| `inverse-primary` | `#ffb5a0` | Light orange accents |

### Surface & Background (Light Mode)
A range of warm-tinted off-whites maintains a clean, architectural feel.
| Token | Hex |
| :--- | :--- |
| `background` | `#fff8f6` |
| `surface` | `#fff8f6` |
| `surface-container-lowest`| `#ffffff` |
| `surface-container-low` | `#fff1ed` |
| `surface-container` | `#ffe9e4` |
| `surface-container-high` | `#ffe2da` |
| `on-surface` | `#271813` |
| `on-surface-variant` | `#5b4039` |

### Secondary & Dark Mode (Deep Onyx)
Defines the "Dark Mode" sections and heavy typography. Provides a sophisticated, secure backdrop for premium service descriptions.
| Token | Hex |
| :--- | :--- |
| `secondary` | `#5e5e5e` |
| `secondary-container` | `#e3e2e2` |
| `on-secondary-fixed` | `#1b1c1c` (Deep Onyx Base) |
| `secondary-fixed-dim` | `#c7c6c6` |

### Tertiary & Semantic
Used sparingly for functional elements like icons, borders, and badges.
| Token | Hex | Use |
| :--- | :--- | :--- |
| `tertiary` | `#00628c` | Informational Blues |
| `tertiary-container` | `#007caf` | |
| `error` | `#ba1a1a` | Destructive actions |
| `outline` | `#907067` | Borders |
| `outline-variant` | `#e4beb4` | Soft borders |

---

## 🔤 Typography

The system uses a pairing of **Plus Jakarta Sans** for expressive, high-impact headings and **Inter** for utilitarian body text.

### Display & Headlines
Use `Plus Jakarta Sans` with Black (900) or ExtraBold (800) weights. Letter spacing is aggressively tightened to create a "locked-in" architectural look.

| Role | Font Family | Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-xl` | Plus Jakarta Sans | `4.5rem` | 900 (Black) | 0.95 | `-0.05em` |
| `display-lg` | Plus Jakarta Sans | `3.75rem`| 900 (Black) | 1.00 | `-0.04em` |
| `headline-md` | Plus Jakarta Sans | `2.25rem`| 800 (ExtraBold) | 1.10 | `-0.02em` |
| `title-lg` | Plus Jakarta Sans | `1.5rem` | 700 (Bold) | 1.20 | Normal |

### Body & Labels
`Inter` provides neutral clarity with generous line heights to balance the density of the headlines.

| Role | Font Family | Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `body-lg` | Inter | `1.25rem` | 400 (Regular) | 1.60 | Normal |
| `body-md` | Inter | `1.125rem`| 400 (Regular) | 1.50 | Normal |
| `label-sm` | Plus Jakarta Sans | `0.75rem` | 900 (Black) | 1.00 | `+0.15em` |

---

## 📐 Layout, Spacing & Shapes

The layout follows a **Fixed-Width Grid** within a `1536px` container, utilizing generous horizontal margins of `3rem` (48px) to allow the content room to breathe.

### Spacing Scale
| Token | Value | Context |
| :--- | :--- | :--- |
| `container-max` | `1536px` | Max width constraint |
| `gutter` | `3rem` | Horizontal margins |
| `section-padding` | `8rem` | Vertical space between main blocks |
| `stack-lg` | `2.5rem` | Major component separation |
| `stack-md` | `1.5rem` | Standard paragraph spacing |
| `stack-sm` | `0.5rem` | Related labels/inputs |

### Radius & Elevation
The shape language uses **Large-Scale Soft Geometric** forms.
- **Primary Radius (`md`: 0.75rem):** Used for buttons and input fields to maintain a professional, sturdy feel.
- **Container Radius (`xl`: 1.5rem):** Larger containers like Bento-grid cards and feature images.
- **Shadows & Glassmorphism:** High-diffusion shadows are used instead of skeuomorphism. Navigation bars use a `backdrop-blur-[20px]` effect with `70%` opacity to maintain context while scrolling.
