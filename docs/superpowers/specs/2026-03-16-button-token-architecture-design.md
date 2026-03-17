# Button Token Architecture — Design Spec

**Date:** 2026-03-16
**Project:** BuildParty Storybook
**Scope:** Minimal 3-tier Token Studio JSON for a Button component exercise
**Status:** Approved

---

## Context

This token set is scoped to a single learning exercise: implementing a Button component in Figma using Token Studio. It is intentionally minimal — only the tokens needed to fully define two button variants (primary and outlined) in both light and dark mode.

The token set will be imported into Figma via Token Studio and used to build a Button component with Figma Variables.

**Out of scope:** hover, focus, and disabled states. These are excluded intentionally to keep the exercise focused on the 3-tier structure.

---

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Color palette | Amber / Orange | Chosen over purple (existing), blue, teal, indigo — warmer, live-event energy |
| Mode support | Light + Dark | Both modes; Token Studio handles via mode sets |
| Button variants | Primary + Outlined | Enough to demonstrate component → semantic → primitive chain |
| Token format | DTCG (`$value` / `$type`) | W3C standard, supported natively by Token Studio 2.x |
| Spacing system | 8px grid (`sizing-N`) | Consistent with provided spacing reference |
| Naming — spacing | `sizing-N` scale | Raw primitives; T-shirt names live in semantic |
| Naming — typography | T-shirt at primitive level | Font size and weight are raw scale values like colors — no purpose-layer alias adds meaning at this scale. Skipping semantic keeps the chain shorter and is the common pattern in Token Studio tutorials. |
| Naming — padding | T-shirt at semantic level | `padding-sm`, `padding-lg` — references sizing primitives |
| `text-transform` | CSS only, no token | Figma Variables don't support `text-transform`; applied directly in code and as a Figma text property |
| `button-primary-border` | No token, no stroke | `transparent` is not a valid Figma Variable value; primary button has no stroke — simply omit the stroke property in Figma |
| `color-action-bg` vs `color-action-emphasis` | Intentionally separate | Both resolve to the same amber value at resting state. They are separate because they serve different purposes: `color-action-bg` is the filled surface color; `color-action-emphasis` is the accent color used for text and borders on non-filled surfaces. When hover/active states are added, these will diverge. |
| `color-on-action` — same in both modes | Intentional | White (`color-neutral-0`) on amber provides sufficient contrast at both amber-600 (light) and amber-500 (dark). No mode override is needed. |
| `sizing-max` / `radius-full` | Included for completeness | Not consumed by the button but included to demonstrate a complete radius scale pattern. In a production system, `radius-full` is used for pill-shaped buttons and badges. |

---

## Token Architecture

### Rule
- **Primitives** — raw values only (colors, sizing scale, border widths, typography scale). No references to other tokens.
- **Semantic** — named, intent-driven tokens. All reference a primitive. Colors are mode-aware (light/dark). Typography tokens are exempt from this tier — see Decisions above.
- **Component** — button-specific tokens. Reference semantic tokens (or primitives directly for typography).

---

## Tier 1 — Primitives

### Colors

| Token | Value | Note |
|---|---|---|
| `color-amber-400` | `#fbbf24` | |
| `color-amber-500` | `#f59e0b` | |
| `color-amber-600` | `#d97706` | |
| `color-amber-700` | `#b45309` | |
| `color-neutral-0` | `#ffffff` | Pure white |
| `color-neutral-50` | `#fafaf8` | Warm off-white, light surface |
| `color-neutral-400` | `#a8a29e` | Mid-gray, dark mode secondary text |
| `color-neutral-900` | `#1c1917` | Near-black, light mode text |
| `color-warm-950` | `#1a1208` | Warm dark brown, dark mode background |

> **Note:** `color-warm-950` is amber-tinted, not a neutral gray — named `warm` to reflect its warm undertone.

### Sizing (8px grid)

| Token | Value |
|---|---|
| `sizing-0` | `0px` |
| `sizing-1` | `4px` |
| `sizing-2` | `8px` |
| `sizing-3` | `12px` |
| `sizing-4` | `16px` |
| `sizing-5` | `24px` |
| `sizing-max` | `9999px` | *(optional — included for scale completeness; used by `radius-full` only)* |

> All values include units. `sizing-0` uses `0px` for consistency and to avoid Token Studio validation warnings.

### Border Width

| Token | Value |
|---|---|
| `border-width-1` | `1px` |
| `border-width-2` | `2px` |

> Both border-width tokens use `$type: "dimension"` in DTCG JSON, the same type as sizing and font-size tokens.

### Typography

| Token | Value |
|---|---|
| `font-family-sans` | `Mona Sans` |
| `font-size-sm` | `14px` |
| `font-size-md` | `16px` |
| `font-weight-regular` | `400` |
| `font-weight-medium` | `500` |
| `font-weight-semibold` | `600` |

> **Font family quoting:** The `$value` for `font-family-sans` is the plain string `Mona Sans` — no wrapping quotes. In JSON this appears as `"$value": "Mona Sans"`. Adding extra quotes would produce `"Mona Sans"` as a literal string and cause a Token Studio resolution error.

---

## Tier 2 — Semantic

### Colors (mode-aware)

| Token | Light mode | Dark mode |
|---|---|---|
| `color-action-bg` | `{color-amber-600}` | `{color-amber-500}` |
| `color-on-action` | `{color-neutral-0}` | `{color-neutral-0}` |
| `color-action-emphasis` | `{color-amber-600}` | `{color-amber-500}` |
| `color-surface-default` | `{color-neutral-0}` | `{color-warm-950}` |
| `color-text-on-surface` | `{color-neutral-900}` | `{color-neutral-400}` |

> `color-on-action` is intentionally identical in both modes. White text on amber provides sufficient contrast whether the amber resolves to `color-amber-600` (light) or `color-amber-500` (dark). No mode override needed.

### Padding Scale

| Token | Reference | Resolved value |
|---|---|---|
| `padding-none` | `{sizing-0}` | `0px` |
| `padding-xxs` | `{sizing-1}` | `4px` |
| `padding-xs` | `{sizing-2}` | `8px` |
| `padding-sm` | `{sizing-3}` | `12px` |
| `padding-md` | `{sizing-4}` | `16px` |
| `padding-lg` | `{sizing-5}` | `24px` |

### Radius Scale

| Token | Reference | Resolved value |
|---|---|---|
| `radius-none` | `{sizing-0}` | `0px` |
| `radius-sm` | `{sizing-2}` | `8px` |
| `radius-md` | `{sizing-3}` | `12px` |
| `radius-full` | `{sizing-max}` | `9999px` | *(optional — not used by this button; included to show a complete radius scale)* |

### Border Width

| Token | Reference | Resolved value |
|---|---|---|
| `border-width-default` | `{border-width-1}` | `1px` |

---

## Tier 3 — Component (Button)

### Primary variant

| Token | Reference | Note |
|---|---|---|
| `button-primary-bg` | `{color-action-bg}` | |
| `button-primary-text` | `{color-on-action}` | |

> Primary button has no stroke. Do not apply a stroke property in Figma; no border-width token is needed.

### Outlined variant

| Token | Reference |
|---|---|
| `button-outlined-bg` | `{color-surface-default}` |
| `button-outlined-text` | `{color-action-emphasis}` |
| `button-outlined-border` | `{color-action-emphasis}` |
| `button-outlined-border-width` | `{border-width-default}` |

> `button-outlined-text` and `button-outlined-border` intentionally share `{color-action-emphasis}`. At resting state, outlined button text and border are the same amber color. They are separate tokens so they can diverge independently when hover/focus states are added.

### Shared sizing

| Token | Reference |
|---|---|
| `button-padding-y` | `{padding-sm}` |
| `button-padding-x` | `{padding-lg}` |
| `button-radius` | `{radius-sm}` |

### Shared typography

| Token | Reference |
|---|---|
| `button-font-family` | `{font-family-sans}` |
| `button-font-size` | `{font-size-sm}` |
| `button-font-weight` | `{font-weight-semibold}` |

> **Note:** `text-transform: uppercase` is applied directly in CSS and as a Figma text property — no token needed.

---

## Reference Chains

```
color:        primitive → semantic (mode-aware) → component
padding:      primitive (sizing-N) → semantic (padding-sm) → component
radius:       primitive (sizing-N) → semantic (radius-sm) → component
border-width: primitive → semantic → component
typography:   primitive → component (intentionally skips semantic — see Decisions)
```

---

## Token Studio JSON Structure

### DTCG token format

Each token in the JSON uses the DTCG `$value` / `$type` format. Example:

```json
"color-amber-600":      { "$value": "#d97706",    "$type": "color" },
"sizing-3":             { "$value": "12px",        "$type": "dimension" },
"font-size-sm":         { "$value": "14px",        "$type": "dimension" },
"font-family-sans":     { "$value": "Mona Sans",   "$type": "fontFamily" },
"font-weight-semibold": { "$value": "600",          "$type": "fontWeight" },
"border-width-1":       { "$value": "1px",          "$type": "dimension" },
"padding-sm":           { "$value": "{sizing-3}",   "$type": "dimension" }
```

References use curly-brace syntax: `"{token-name}"`.

### File structure

The JSON file contains **three token sets** (`primitives`, `semantic`, `component/button`) plus two reserved metadata keys (`$themes`, `$metadata`) at the root:

```json
{
  "primitives": { ... },
  "semantic": { ... },
  "component/button": { ... },
  "$themes": [ ... ],
  "$metadata": {
    "tokenSetOrder": ["primitives", "semantic", "component/button"]
  }
}
```

Token sets are applied in order: `primitives` → `semantic` → `component/button`.

### Light / dark mode setup

Light/dark mode is implemented using Token Studio's **Modes** feature on the `semantic` token set — not via `$themes`. In the Token Studio UI:

1. Open the `semantic` token set
2. Add two modes: `light` and `dark`
3. Set per-mode values for all five semantic color tokens:
   - `color-action-bg` — light: `{color-amber-600}`, dark: `{color-amber-500}`
   - `color-action-emphasis` — light: `{color-amber-600}`, dark: `{color-amber-500}`
   - `color-surface-default` — light: `{color-neutral-0}`, dark: `{color-warm-950}`
   - `color-text-on-surface` — light: `{color-neutral-900}`, dark: `{color-neutral-400}`
   - `color-on-action` — light: `{color-neutral-0}`, dark: `{color-neutral-0}` *(identical in both modes — still requires a value in each mode to avoid an unset variable error)*

Non-color semantic tokens (`padding-*`, `radius-*`, `border-width-*`) are mode-agnostic and only need one value.

> **Cross-set reference resolution:** Token Studio resolves `{token-name}` references by searching the active token sets in the order defined by `tokenSetOrder`. Because `primitives` comes before `semantic` in the order, a reference like `{sizing-3}` inside the `semantic` set correctly finds the primitive. No explicit set namespacing is needed — the order handles it.
