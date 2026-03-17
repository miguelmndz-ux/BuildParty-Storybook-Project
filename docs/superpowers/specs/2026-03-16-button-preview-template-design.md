# Button Preview HTML Template — Design Spec

**Date:** 2026-03-16
**Author:** Claude Code
**Status:** Approved

---

## Goal

Create a standalone `preview.html` at the project root that renders the BuildParty Button atom in a realistic website context — no build step, no React, no dependencies.

---

## Scope

- Single file: `preview.html`
- Inline `<style>` block — CSS custom properties copied verbatim from `src/index.css`
- Button rendered with plain CSS matching the Tailwind classes in `Button.tsx`
- No real content — placeholder headlines, lorem subtext
- No interactivity beyond hover states

---

## Page Structure

### 1. Navbar
- Logo placeholder (text mark) on the left
- Three nav link placeholders on the right
- Bottom border using `var(--border)`

### 2. Hero Section
- Large headline (`var(--text-h)`, ~52px, light weight)
- Supporting subtext (`var(--text)`, ~18px)
- Button group: **Primary** + **Outline** side-by-side with a 12px gap

### 3. Secondary CTA Band
- Background: `var(--accent-bg)`, border-top/bottom: `var(--accent-border)`
- Short tagline (`var(--text-h)`)
- Single **Primary** button centered

### 4. Disabled State Row (below hero, above CTA)
- Small caption: "Disabled states" as a `<p>` above the button group, using `var(--text)` at 12px
- Primary (disabled) + Outline (disabled) side-by-side; each button has a `<span>` label beneath it ("Primary — disabled", "Outline — disabled") in `var(--text)` at 11px

---

## Button CSS

Matches `Button.tsx` exactly:

```css
/* Shared */
display: inline-flex; align-items: center; justify-content: center;
padding: var(--btn-padding-y) var(--btn-padding-x);
border-radius: var(--btn-radius);
font-size: var(--btn-font-size);
font-weight: var(--btn-font-weight);
letter-spacing: var(--btn-letter-spacing);
line-height: var(--btn-line-height);
text-transform: uppercase;
white-space: nowrap;
user-select: none;
border-style: solid;
cursor: pointer;

/* Primary */
background: var(--btn-primary-bg);
color: var(--btn-primary-text);
border: 0; /* reset browser default first */
border-width: 0 0 2px 2px;
border-color: var(--btn-border-color);

/* Outline */
background: transparent;
color: var(--btn-outlined-text);
border-width: 2px;
border-color: var(--btn-border-color);

/* Disabled */
opacity: var(--btn-opacity-disabled);
cursor: not-allowed;
```

---

## Design Tokens Used

> **Note on naming:** `src/index.css` `:root` defines `--btn-outlined-text` (used here). `Button.tsx` uses Tailwind class `text-btn-outline-text` which maps to `--color-btn-outline-text` in `@theme`. Since `preview.html` uses plain CSS (not Tailwind), use `--btn-outlined-text` from `:root`.

### Button tokens (from `:root` in `src/index.css`)
| Token | Value |
|---|---|
| `--btn-primary-bg` | `#d97706` |
| `--btn-primary-text` | `#ffffff` |
| `--btn-outlined-text` | `#b45309` |
| `--btn-border-color` | `#b45309` |
| `--btn-padding-x` | `16px` |
| `--btn-padding-y` | `8px` |
| `--btn-radius` | `8px` |
| `--btn-font-size` | `14px` |
| `--btn-font-weight` | `600` |
| `--btn-letter-spacing` | `1px` |
| `--btn-line-height` | `1.3` |
| `--btn-border-width` | `2px` |
| `--btn-opacity-disabled` | `0.5` |

### Page tokens (from `:root` in `src/index.css`)
| Token | Value |
|---|---|
| `--text` | `#6b6375` |
| `--text-h` | `#08060d` |
| `--bg` | `#ffffff` |
| `--border` | `#e5e4e7` |
| `--accent-bg` | `rgba(170,59,255,0.1)` |
| `--accent-border` | `rgba(170,59,255,0.5)` |

---

## Out of Scope

- Dark mode toggle
- Mobile responsiveness
- Any React/Vite build
- Real copy or imagery
