# Design Token Expansion Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Figma token JSON files to follow a Primitives → Semantic → Mapped → Responsive architecture matching the instructor's approach, expanded to cover all color scales, typography, spacing, and mapped variables needed for the full component library.

**Architecture:** Four JSON collections — `primitives.json` (raw values), `semantic.json` (role aliases), `mapped.json` (component-ready variables: Text/Icons/Surface/Border), `responsive-desktop.json` + `responsive-mobile.json` (typography scale per breakpoint). `semantic-dark.json`, `semantic-light.json`, and `component-button.json` are deleted.

**Tech Stack:** DTCG token format with Figma alias extensions (`$extensions.com.figma.aliasData`)

---

## File Map

| Action | File |
|---|---|
| OVERWRITE | `tokens/figma/primitives.json` |
| CREATE | `tokens/figma/semantic.json` |
| DELETE | `tokens/figma/semantic-light.json` |
| DELETE | `tokens/figma/semantic-dark.json` |
| CREATE | `tokens/figma/mapped.json` |
| DELETE | `tokens/figma/component-button.json` |
| CREATE | `tokens/figma/responsive-desktop.json` |
| CREATE | `tokens/figma/responsive-mobile.json` |

---

## Reference Data

### Color Scales (hex values for all 9 steps)

**Amber (primary)**
| Token | Hex |
|---|---|
| amber-100 | #fef3c7 |
| amber-200 | #fde68a |
| amber-300 | #fcd34d |
| amber-400 | #fbbf24 |
| amber-500 | #f59e0b |
| amber-600 | #d97706 |
| amber-700 | #b45309 |
| amber-800 | #92400e |
| amber-900 | #78350f |

**Neutral (warm stone)**
| Token | Hex |
|---|---|
| neutral-0 | #ffffff |
| neutral-50 | #fafaf8 |
| neutral-100 | #f5f5f4 |
| neutral-200 | #e7e5e4 |
| neutral-300 | #d6d3d1 |
| neutral-400 | #a8a29e |
| neutral-500 | #78716c |
| neutral-600 | #57534e |
| neutral-700 | #44403c |
| neutral-800 | #292524 |
| neutral-900 | #1c1917 |
| neutral-950 | #1a1208 |

**Green (success)**
100→#dcfce7, 200→#bbf7d0, 300→#86efac, 400→#4ade80, 500→#22c55e, 600→#16a34a, 700→#15803d, 800→#166534, 900→#14532d

**Red (error)**
100→#fee2e2, 200→#fecaca, 300→#fca5a5, 400→#f87171, 500→#ef4444, 600→#dc2626, 700→#b91c1c, 800→#991b1b, 900→#7f1d1d

**Orange (warning)**
100→#ffedd5, 200→#fed7aa, 300→#fdba74, 400→#fb923c, 500→#f97316, 600→#ea580c, 700→#c2410c, 800→#9a3412, 900→#7c2d12

**Blue (info)**
100→#dbeafe, 200→#bfdbfe, 300→#93c5fd, 400→#60a5fa, 500→#3b82f6, 600→#2563eb, 700→#1d4ed8, 800→#1e40af, 900→#1e3a8a

### Number Scale (multiples of 4, 0–1100)
| Token name | Value |
|---|---|
| scale-0 | 0px |
| scale-25 | 1px |
| scale-50 | 2px |
| scale-100 | 4px |
| scale-200 | 8px |
| scale-300 | 12px |
| scale-400 | 16px |
| scale-500 | 20px |
| scale-600 | 24px |
| scale-700 | 28px |
| scale-800 | 32px |
| scale-900 | 40px |
| scale-1000 | 48px |
| scale-1100 | 64px |

### Responsive Typography Values

**Desktop**
| Level | Font Size | Line Height | Paragraph Spacing |
|---|---|---|---|
| h1 | 60px | 72px | 64px |
| h2 | 48px | 58px | 64px |
| h3 | 40px | 48px | 48px |
| h4 | 32px | 40px | 48px |
| h5 | 24px | 28px | 32px |
| h6 | 20px | 24px | 32px |
| paragraph-lg | 20px | 28px | 24px |
| paragraph-md | 16px | 24px | 20px |
| paragraph-sm | 14px | 20px | 16px |
| paragraph-xsm | 12px | 16px | 12px |

**Mobile** (paragraphs stay same as desktop)
| Level | Font Size | Line Height | Paragraph Spacing |
|---|---|---|---|
| h1 | 48px | 56px | 48px |
| h2 | 40px | 48px | 48px |
| h3 | 32px | 40px | 32px |
| h4 | 28px | 36px | 32px |
| h5 | 24px | 28px | 32px |
| h6 | 20px | 24px | 32px |

---

## Task 1: Overwrite primitives.json

**Files:**
- Overwrite: `tokens/figma/primitives.json`

- [ ] **Step 1: Write the full primitives.json**

Replace the entire file with the following content. Color values use DTCG sRGB format (components are 0–1 floats = hex / 255). Scale values are dimension tokens.

```json
{
  "amber-100": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9961, 0.9529, 0.7804], "alpha": 1, "hex": "#fef3c7" } },
  "amber-200": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9922, 0.9020, 0.5412], "alpha": 1, "hex": "#fde68a" } },
  "amber-300": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9882, 0.8275, 0.3020], "alpha": 1, "hex": "#fcd34d" } },
  "amber-400": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9843, 0.7490, 0.1412], "alpha": 1, "hex": "#fbbf24" } },
  "amber-500": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9608, 0.6196, 0.0431], "alpha": 1, "hex": "#f59e0b" } },
  "amber-600": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.8510, 0.4667, 0.0235], "alpha": 1, "hex": "#d97706" } },
  "amber-700": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7059, 0.3255, 0.0353], "alpha": 1, "hex": "#b45309" } },
  "amber-800": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.5725, 0.2510, 0.0549], "alpha": 1, "hex": "#92400e" } },
  "amber-900": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.4706, 0.2078, 0.0588], "alpha": 1, "hex": "#78350f" } },

  "neutral-0":   { "$type": "color", "$value": { "colorSpace": "srgb", "components": [1,      1,      1     ], "alpha": 1, "hex": "#ffffff" } },
  "neutral-50":  { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9804, 0.9804, 0.9725], "alpha": 1, "hex": "#fafaf8" } },
  "neutral-100": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9608, 0.9608, 0.9569], "alpha": 1, "hex": "#f5f5f4" } },
  "neutral-200": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9059, 0.8980, 0.8941], "alpha": 1, "hex": "#e7e5e4" } },
  "neutral-300": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.8392, 0.8275, 0.8196], "alpha": 1, "hex": "#d6d3d1" } },
  "neutral-400": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.6588, 0.6353, 0.6196], "alpha": 1, "hex": "#a8a29e" } },
  "neutral-500": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.4706, 0.4431, 0.4235], "alpha": 1, "hex": "#78716c" } },
  "neutral-600": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.3412, 0.3255, 0.3059], "alpha": 1, "hex": "#57534e" } },
  "neutral-700": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.2667, 0.2510, 0.2353], "alpha": 1, "hex": "#44403c" } },
  "neutral-800": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1608, 0.1451, 0.1412], "alpha": 1, "hex": "#292524" } },
  "neutral-900": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1098, 0.0980, 0.0902], "alpha": 1, "hex": "#1c1917" } },
  "neutral-950": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1020, 0.0706, 0.0314], "alpha": 1, "hex": "#1a1208" } },

  "green-100": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.8627, 0.9882, 0.9059], "alpha": 1, "hex": "#dcfce7" } },
  "green-200": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7333, 0.9686, 0.8157], "alpha": 1, "hex": "#bbf7d0" } },
  "green-300": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.5255, 0.9373, 0.6745], "alpha": 1, "hex": "#86efac" } },
  "green-400": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.2902, 0.8706, 0.5020], "alpha": 1, "hex": "#4ade80" } },
  "green-500": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1333, 0.7725, 0.3686], "alpha": 1, "hex": "#22c55e" } },
  "green-600": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.0863, 0.6392, 0.2902], "alpha": 1, "hex": "#16a34a" } },
  "green-700": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.0824, 0.5020, 0.2392], "alpha": 1, "hex": "#15803d" } },
  "green-800": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.0863, 0.3961, 0.2039], "alpha": 1, "hex": "#166534" } },
  "green-900": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.0784, 0.3255, 0.1765], "alpha": 1, "hex": "#14532d" } },

  "red-100": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9961, 0.8863, 0.8863], "alpha": 1, "hex": "#fee2e2" } },
  "red-200": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9961, 0.7922, 0.7922], "alpha": 1, "hex": "#fecaca" } },
  "red-300": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9882, 0.6471, 0.6471], "alpha": 1, "hex": "#fca5a5" } },
  "red-400": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9725, 0.4431, 0.4431], "alpha": 1, "hex": "#f87171" } },
  "red-500": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9373, 0.2667, 0.2667], "alpha": 1, "hex": "#ef4444" } },
  "red-600": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.8627, 0.1490, 0.1490], "alpha": 1, "hex": "#dc2626" } },
  "red-700": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7255, 0.1098, 0.1098], "alpha": 1, "hex": "#b91c1c" } },
  "red-800": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.6000, 0.1059, 0.1059], "alpha": 1, "hex": "#991b1b" } },
  "red-900": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.4980, 0.1137, 0.1137], "alpha": 1, "hex": "#7f1d1d" } },

  "orange-100": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [1.0000, 0.9294, 0.8353], "alpha": 1, "hex": "#ffedd5" } },
  "orange-200": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9961, 0.8431, 0.6667], "alpha": 1, "hex": "#fed7aa" } },
  "orange-300": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9922, 0.7294, 0.4549], "alpha": 1, "hex": "#fdba74" } },
  "orange-400": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9843, 0.5725, 0.2353], "alpha": 1, "hex": "#fb923c" } },
  "orange-500": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9765, 0.4510, 0.0863], "alpha": 1, "hex": "#f97316" } },
  "orange-600": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9176, 0.3451, 0.0471], "alpha": 1, "hex": "#ea580c" } },
  "orange-700": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7608, 0.2549, 0.0471], "alpha": 1, "hex": "#c2410c" } },
  "orange-800": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.6039, 0.2039, 0.0706], "alpha": 1, "hex": "#9a3412" } },
  "orange-900": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.4863, 0.1765, 0.0706], "alpha": 1, "hex": "#7c2d12" } },

  "blue-100": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.8588, 0.9176, 0.9961], "alpha": 1, "hex": "#dbeafe" } },
  "blue-200": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7490, 0.8588, 0.9961], "alpha": 1, "hex": "#bfdbfe" } },
  "blue-300": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.5765, 0.7725, 0.9922], "alpha": 1, "hex": "#93c5fd" } },
  "blue-400": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.3765, 0.6471, 0.9804], "alpha": 1, "hex": "#60a5fa" } },
  "blue-500": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.2314, 0.5098, 0.9647], "alpha": 1, "hex": "#3b82f6" } },
  "blue-600": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1451, 0.3882, 0.9216], "alpha": 1, "hex": "#2563eb" } },
  "blue-700": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1137, 0.3059, 0.8471], "alpha": 1, "hex": "#1d4ed8" } },
  "blue-800": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1176, 0.2510, 0.6863], "alpha": 1, "hex": "#1e40af" } },
  "blue-900": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1176, 0.2275, 0.5412], "alpha": 1, "hex": "#1e3a8a" } },

  "font-family-sans":     { "$type": "fontFamily", "$value": "Mona Sans" },
  "font-weight-regular":  { "$type": "number",     "$value": 400 },
  "font-weight-medium":   { "$type": "number",     "$value": 500 },
  "font-weight-semibold": { "$type": "number",     "$value": 600 },
  "font-weight-bold":     { "$type": "number",     "$value": 700 },

  "scale-0":    { "$type": "dimension", "$value": { "value": 0,    "unit": "px" } },
  "scale-25":   { "$type": "dimension", "$value": { "value": 1,    "unit": "px" } },
  "scale-50":   { "$type": "dimension", "$value": { "value": 2,    "unit": "px" } },
  "scale-100":  { "$type": "dimension", "$value": { "value": 4,    "unit": "px" } },
  "scale-200":  { "$type": "dimension", "$value": { "value": 8,    "unit": "px" } },
  "scale-300":  { "$type": "dimension", "$value": { "value": 12,   "unit": "px" } },
  "scale-400":  { "$type": "dimension", "$value": { "value": 16,   "unit": "px" } },
  "scale-500":  { "$type": "dimension", "$value": { "value": 20,   "unit": "px" } },
  "scale-600":  { "$type": "dimension", "$value": { "value": 24,   "unit": "px" } },
  "scale-700":  { "$type": "dimension", "$value": { "value": 28,   "unit": "px" } },
  "scale-800":  { "$type": "dimension", "$value": { "value": 32,   "unit": "px" } },
  "scale-900":  { "$type": "dimension", "$value": { "value": 40,   "unit": "px" } },
  "scale-1000": { "$type": "dimension", "$value": { "value": 48,   "unit": "px" } },
  "scale-1100": { "$type": "dimension", "$value": { "value": 64,   "unit": "px" } }
}
```

- [ ] **Step 2: Validate JSON**
```bash
node -e "JSON.parse(require('fs').readFileSync('tokens/figma/primitives.json','utf8')); console.log('✓ valid')"
```

- [ ] **Step 3: Commit**
```bash
git add tokens/figma/primitives.json
git commit -m "feat(tokens): expand primitives — full color scales + scale-0-1100"
```

---

## Task 2: Create semantic.json, delete old semantic files

**Files:**
- Create: `tokens/figma/semantic.json`
- Delete: `tokens/figma/semantic-light.json`
- Delete: `tokens/figma/semantic-dark.json`

- [ ] **Step 1: Write semantic.json**

```json
{
  "color-primary-light":   { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9922, 0.9020, 0.5412], "alpha": 1, "hex": "#fde68a" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "amber-200" } } },
  "color-primary-default": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9608, 0.6196, 0.0431], "alpha": 1, "hex": "#f59e0b" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "amber-500" } } },
  "color-primary-dark":    { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7059, 0.3255, 0.0353], "alpha": 1, "hex": "#b45309" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "amber-700" } } },

  "color-neutral-light":   { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9059, 0.8980, 0.8941], "alpha": 1, "hex": "#e7e5e4" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-200" } } },
  "color-neutral-default": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.4706, 0.4431, 0.4235], "alpha": 1, "hex": "#78716c" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-500" } } },
  "color-neutral-dark":    { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.2667, 0.2510, 0.2353], "alpha": 1, "hex": "#44403c" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-700" } } },

  "color-success-light":   { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7333, 0.9686, 0.8157], "alpha": 1, "hex": "#bbf7d0" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "green-200" } } },
  "color-success-default": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1333, 0.7725, 0.3686], "alpha": 1, "hex": "#22c55e" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "green-500" } } },
  "color-success-dark":    { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.0824, 0.5020, 0.2392], "alpha": 1, "hex": "#15803d" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "green-700" } } },

  "color-error-light":     { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9961, 0.7922, 0.7922], "alpha": 1, "hex": "#fecaca" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "red-200" } } },
  "color-error-default":   { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9373, 0.2667, 0.2667], "alpha": 1, "hex": "#ef4444" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "red-500" } } },
  "color-error-dark":      { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7255, 0.1098, 0.1098], "alpha": 1, "hex": "#b91c1c" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "red-700" } } },

  "color-warning-light":   { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9961, 0.8431, 0.6667], "alpha": 1, "hex": "#fed7aa" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "orange-200" } } },
  "color-warning-default": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9765, 0.4510, 0.0863], "alpha": 1, "hex": "#f97316" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "orange-500" } } },
  "color-warning-dark":    { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7608, 0.2549, 0.0471], "alpha": 1, "hex": "#c2410c" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "orange-700" } } },

  "color-info-light":      { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7490, 0.8588, 0.9961], "alpha": 1, "hex": "#bfdbfe" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "blue-200" } } },
  "color-info-default":    { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.2314, 0.5098, 0.9647], "alpha": 1, "hex": "#3b82f6" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "blue-500" } } },
  "color-info-dark":       { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1137, 0.3059, 0.8471], "alpha": 1, "hex": "#1d4ed8" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "blue-700" } } },

  "color-surface-page":    { "$type": "color", "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "alpha": 1, "hex": "#ffffff" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-0" } } },
  "color-surface-default": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9804, 0.9804, 0.9725], "alpha": 1, "hex": "#fafaf8" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-50" } } },
  "color-on-action":       { "$type": "color", "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "alpha": 1, "hex": "#ffffff" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-0" } } },

  "color-text-heading":    { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1608, 0.1451, 0.1412], "alpha": 1, "hex": "#292524" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-800" } } },
  "color-text-default":    { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.2667, 0.2510, 0.2353], "alpha": 1, "hex": "#44403c" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-700" } } },
  "color-text-body":       { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.3412, 0.3255, 0.3059], "alpha": 1, "hex": "#57534e" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-600" } } },
  "color-text-disabled":   { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.6588, 0.6353, 0.6196], "alpha": 1, "hex": "#a8a29e" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-400" } } },
  "color-border-default":  { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9059, 0.8980, 0.8941], "alpha": 1, "hex": "#e7e5e4" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-200" } } },
  "color-border-subtle":   { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9608, 0.9608, 0.9569], "alpha": 1, "hex": "#f5f5f4" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-100" } } },

  "radius-none":   { "$type": "dimension", "$value": { "value": 0,    "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-0" } } },
  "radius-sm":     { "$type": "dimension", "$value": { "value": 2,    "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-50" } } },
  "radius-md":     { "$type": "dimension", "$value": { "value": 4,    "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-100" } } },
  "radius-lg":     { "$type": "dimension", "$value": { "value": 8,    "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-200" } } },
  "radius-full":   { "$type": "dimension", "$value": { "value": 9999, "unit": "px" } },

  "border-width-none":   { "$type": "dimension", "$value": { "value": 0, "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-0" } } },
  "border-width-sm":     { "$type": "dimension", "$value": { "value": 1, "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-25" } } },
  "border-width-md":     { "$type": "dimension", "$value": { "value": 2, "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-50" } } },
  "border-width-lg":     { "$type": "dimension", "$value": { "value": 4, "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-100" } } },

  "padding-none":  { "$type": "dimension", "$value": { "value": 0,  "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-0" } } },
  "padding-xxs":   { "$type": "dimension", "$value": { "value": 4,  "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-100" } } },
  "padding-xs":    { "$type": "dimension", "$value": { "value": 8,  "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-200" } } },
  "padding-sm":    { "$type": "dimension", "$value": { "value": 12, "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-300" } } },
  "padding-md":    { "$type": "dimension", "$value": { "value": 16, "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-400" } } },
  "padding-lg":    { "$type": "dimension", "$value": { "value": 24, "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-600" } } },

  "gap-none":  { "$type": "dimension", "$value": { "value": 0,  "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-0" } } },
  "gap-xxs":   { "$type": "dimension", "$value": { "value": 4,  "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-100" } } },
  "gap-xs":    { "$type": "dimension", "$value": { "value": 8,  "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-200" } } },
  "gap-sm":    { "$type": "dimension", "$value": { "value": 12, "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-300" } } },
  "gap-md":    { "$type": "dimension", "$value": { "value": 16, "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-400" } } },
  "gap-lg":    { "$type": "dimension", "$value": { "value": 24, "unit": "px" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "scale-600" } } }
}
```

- [ ] **Step 2: Validate JSON**
```bash
node -e "JSON.parse(require('fs').readFileSync('tokens/figma/semantic.json','utf8')); console.log('✓ valid')"
```

- [ ] **Step 3: Delete old files**
```bash
rm tokens/figma/semantic-light.json tokens/figma/semantic-dark.json
```

- [ ] **Step 4: Commit**
```bash
git add tokens/figma/semantic.json
git rm tokens/figma/semantic-light.json tokens/figma/semantic-dark.json
git commit -m "feat(tokens): add semantic.json with color roles, radius, border, padding, gap"
```

---

## Task 3: Create mapped.json, delete component-button.json

**Files:**
- Create: `tokens/figma/mapped.json`
- Delete: `tokens/figma/component-button.json`

- [ ] **Step 1: Write mapped.json**

Variables use slash-grouped names (Figma reads `/` as group separator).

```json
{
  "text/heading":        { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1608, 0.1451, 0.1412], "alpha": 1, "hex": "#292524" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-text-heading" } } },
  "text/default":        { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.2667, 0.2510, 0.2353], "alpha": 1, "hex": "#44403c" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-text-default" } } },
  "text/body":           { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.3412, 0.3255, 0.3059], "alpha": 1, "hex": "#57534e" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-text-body" } } },
  "text/action":         { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9608, 0.6196, 0.0431], "alpha": 1, "hex": "#f59e0b" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-primary-default" } } },
  "text/action-hover":   { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7059, 0.3255, 0.0353], "alpha": 1, "hex": "#b45309" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-primary-dark" } } },
  "text/disabled":       { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.6588, 0.6353, 0.6196], "alpha": 1, "hex": "#a8a29e" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-text-disabled" } } },
  "text/success":        { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1333, 0.7725, 0.3686], "alpha": 1, "hex": "#22c55e" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-success-default" } } },
  "text/error":          { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9373, 0.2667, 0.2667], "alpha": 1, "hex": "#ef4444" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-error-default" } } },
  "text/warning":        { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9765, 0.4510, 0.0863], "alpha": 1, "hex": "#f97316" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-warning-default" } } },
  "text/info":           { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.2314, 0.5098, 0.9647], "alpha": 1, "hex": "#3b82f6" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-info-default" } } },

  "icon/heading":        { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1608, 0.1451, 0.1412], "alpha": 1, "hex": "#292524" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-text-heading" } } },
  "icon/default":        { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.2667, 0.2510, 0.2353], "alpha": 1, "hex": "#44403c" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-text-default" } } },
  "icon/body":           { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.3412, 0.3255, 0.3059], "alpha": 1, "hex": "#57534e" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-text-body" } } },
  "icon/action":         { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9608, 0.6196, 0.0431], "alpha": 1, "hex": "#f59e0b" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-primary-default" } } },
  "icon/action-hover":   { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7059, 0.3255, 0.0353], "alpha": 1, "hex": "#b45309" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-primary-dark" } } },
  "icon/disabled":       { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.6588, 0.6353, 0.6196], "alpha": 1, "hex": "#a8a29e" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-text-disabled" } } },
  "icon/success":        { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1333, 0.7725, 0.3686], "alpha": 1, "hex": "#22c55e" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-success-default" } } },
  "icon/error":          { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9373, 0.2667, 0.2667], "alpha": 1, "hex": "#ef4444" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-error-default" } } },
  "icon/warning":        { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9765, 0.4510, 0.0863], "alpha": 1, "hex": "#f97316" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-warning-default" } } },
  "icon/info":           { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.2314, 0.5098, 0.9647], "alpha": 1, "hex": "#3b82f6" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-info-default" } } },

  "surface/page":             { "$type": "color", "$value": { "colorSpace": "srgb", "components": [1,      1,      1     ], "alpha": 1, "hex": "#ffffff" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-surface-page" } } },
  "surface/default":          { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9804, 0.9804, 0.9725], "alpha": 1, "hex": "#fafaf8" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-surface-default" } } },
  "surface/action":           { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9608, 0.6196, 0.0431], "alpha": 1, "hex": "#f59e0b" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-primary-default" } } },
  "surface/action-hover":     { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7059, 0.3255, 0.0353], "alpha": 1, "hex": "#b45309" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-primary-dark" } } },
  "surface/action-light":     { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9922, 0.9020, 0.5412], "alpha": 1, "hex": "#fde68a" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-primary-light" } } },
  "surface/disabled":         { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9608, 0.9608, 0.9569], "alpha": 1, "hex": "#f5f5f4" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-100" } } },
  "surface/success":          { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7333, 0.9686, 0.8157], "alpha": 1, "hex": "#bbf7d0" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-success-light" } } },
  "surface/error":            { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9961, 0.7922, 0.7922], "alpha": 1, "hex": "#fecaca" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-error-light" } } },
  "surface/warning":          { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9961, 0.8431, 0.6667], "alpha": 1, "hex": "#fed7aa" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-warning-light" } } },
  "surface/info":             { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7490, 0.8588, 0.9961], "alpha": 1, "hex": "#bfdbfe" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-info-light" } } },

  "border/default":       { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9059, 0.8980, 0.8941], "alpha": 1, "hex": "#e7e5e4" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-border-default" } } },
  "border/subtle":        { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9608, 0.9608, 0.9569], "alpha": 1, "hex": "#f5f5f4" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-border-subtle" } } },
  "border/action":        { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9608, 0.6196, 0.0431], "alpha": 1, "hex": "#f59e0b" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-primary-default" } } },
  "border/action-hover":  { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7059, 0.3255, 0.0353], "alpha": 1, "hex": "#b45309" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-primary-dark" } } },
  "border/focus":         { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9608, 0.6196, 0.0431], "alpha": 1, "hex": "#f59e0b" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-primary-default" } } },
  "border/disabled":      { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.8392, 0.8275, 0.8196], "alpha": 1, "hex": "#d6d3d1" }, "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "neutral-300" } } },
  "border/success":       { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1333, 0.7725, 0.3686], "alpha": 1, "hex": "#22c55e" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-success-default" } } },
  "border/error":         { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9373, 0.2667, 0.2667], "alpha": 1, "hex": "#ef4444" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-error-default" } } },
  "border/warning":       { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9765, 0.4510, 0.0863], "alpha": 1, "hex": "#f97316" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-warning-default" } } },
  "border/info":          { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.2314, 0.5098, 0.9647], "alpha": 1, "hex": "#3b82f6" }, "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-info-default" } } }
}
```

- [ ] **Step 2: Validate JSON**
```bash
node -e "JSON.parse(require('fs').readFileSync('tokens/figma/mapped.json','utf8')); console.log('✓ valid')"
```

- [ ] **Step 3: Delete component-button.json**
```bash
rm tokens/figma/component-button.json
```

- [ ] **Step 4: Commit**
```bash
git add tokens/figma/mapped.json
git rm tokens/figma/component-button.json
git commit -m "feat(tokens): add mapped.json (Text/Icons/Surface/Border), remove component-button"
```

---

## Task 4: Create responsive-desktop.json and responsive-mobile.json

**Files:**
- Create: `tokens/figma/responsive-desktop.json`
- Create: `tokens/figma/responsive-mobile.json`

- [ ] **Step 1: Write responsive-desktop.json**

```json
{
  "h1/font-size":           { "$type": "dimension", "$value": { "value": 60, "unit": "px" } },
  "h1/line-height":         { "$type": "dimension", "$value": { "value": 72, "unit": "px" } },
  "h1/paragraph-spacing":   { "$type": "dimension", "$value": { "value": 64, "unit": "px" } },

  "h2/font-size":           { "$type": "dimension", "$value": { "value": 48, "unit": "px" } },
  "h2/line-height":         { "$type": "dimension", "$value": { "value": 58, "unit": "px" } },
  "h2/paragraph-spacing":   { "$type": "dimension", "$value": { "value": 64, "unit": "px" } },

  "h3/font-size":           { "$type": "dimension", "$value": { "value": 40, "unit": "px" } },
  "h3/line-height":         { "$type": "dimension", "$value": { "value": 48, "unit": "px" } },
  "h3/paragraph-spacing":   { "$type": "dimension", "$value": { "value": 48, "unit": "px" } },

  "h4/font-size":           { "$type": "dimension", "$value": { "value": 32, "unit": "px" } },
  "h4/line-height":         { "$type": "dimension", "$value": { "value": 40, "unit": "px" } },
  "h4/paragraph-spacing":   { "$type": "dimension", "$value": { "value": 48, "unit": "px" } },

  "h5/font-size":           { "$type": "dimension", "$value": { "value": 24, "unit": "px" } },
  "h5/line-height":         { "$type": "dimension", "$value": { "value": 28, "unit": "px" } },
  "h5/paragraph-spacing":   { "$type": "dimension", "$value": { "value": 32, "unit": "px" } },

  "h6/font-size":           { "$type": "dimension", "$value": { "value": 20, "unit": "px" } },
  "h6/line-height":         { "$type": "dimension", "$value": { "value": 24, "unit": "px" } },
  "h6/paragraph-spacing":   { "$type": "dimension", "$value": { "value": 32, "unit": "px" } },

  "paragraph-lg/font-size":         { "$type": "dimension", "$value": { "value": 20, "unit": "px" } },
  "paragraph-lg/line-height":       { "$type": "dimension", "$value": { "value": 28, "unit": "px" } },
  "paragraph-lg/paragraph-spacing": { "$type": "dimension", "$value": { "value": 24, "unit": "px" } },

  "paragraph-md/font-size":         { "$type": "dimension", "$value": { "value": 16, "unit": "px" } },
  "paragraph-md/line-height":       { "$type": "dimension", "$value": { "value": 24, "unit": "px" } },
  "paragraph-md/paragraph-spacing": { "$type": "dimension", "$value": { "value": 20, "unit": "px" } },

  "paragraph-sm/font-size":         { "$type": "dimension", "$value": { "value": 14, "unit": "px" } },
  "paragraph-sm/line-height":       { "$type": "dimension", "$value": { "value": 20, "unit": "px" } },
  "paragraph-sm/paragraph-spacing": { "$type": "dimension", "$value": { "value": 16, "unit": "px" } },

  "paragraph-xsm/font-size":         { "$type": "dimension", "$value": { "value": 12, "unit": "px" } },
  "paragraph-xsm/line-height":       { "$type": "dimension", "$value": { "value": 16, "unit": "px" } },
  "paragraph-xsm/paragraph-spacing": { "$type": "dimension", "$value": { "value": 12, "unit": "px" } }
}
```

- [ ] **Step 2: Write responsive-mobile.json**

Paragraphs stay identical to desktop per instructor's rule. H5 and H6 also stay same.

```json
{
  "h1/font-size":           { "$type": "dimension", "$value": { "value": 48, "unit": "px" } },
  "h1/line-height":         { "$type": "dimension", "$value": { "value": 56, "unit": "px" } },
  "h1/paragraph-spacing":   { "$type": "dimension", "$value": { "value": 48, "unit": "px" } },

  "h2/font-size":           { "$type": "dimension", "$value": { "value": 40, "unit": "px" } },
  "h2/line-height":         { "$type": "dimension", "$value": { "value": 48, "unit": "px" } },
  "h2/paragraph-spacing":   { "$type": "dimension", "$value": { "value": 48, "unit": "px" } },

  "h3/font-size":           { "$type": "dimension", "$value": { "value": 32, "unit": "px" } },
  "h3/line-height":         { "$type": "dimension", "$value": { "value": 40, "unit": "px" } },
  "h3/paragraph-spacing":   { "$type": "dimension", "$value": { "value": 32, "unit": "px" } },

  "h4/font-size":           { "$type": "dimension", "$value": { "value": 28, "unit": "px" } },
  "h4/line-height":         { "$type": "dimension", "$value": { "value": 36, "unit": "px" } },
  "h4/paragraph-spacing":   { "$type": "dimension", "$value": { "value": 32, "unit": "px" } },

  "h5/font-size":           { "$type": "dimension", "$value": { "value": 24, "unit": "px" } },
  "h5/line-height":         { "$type": "dimension", "$value": { "value": 28, "unit": "px" } },
  "h5/paragraph-spacing":   { "$type": "dimension", "$value": { "value": 32, "unit": "px" } },

  "h6/font-size":           { "$type": "dimension", "$value": { "value": 20, "unit": "px" } },
  "h6/line-height":         { "$type": "dimension", "$value": { "value": 24, "unit": "px" } },
  "h6/paragraph-spacing":   { "$type": "dimension", "$value": { "value": 32, "unit": "px" } },

  "paragraph-lg/font-size":         { "$type": "dimension", "$value": { "value": 20, "unit": "px" } },
  "paragraph-lg/line-height":       { "$type": "dimension", "$value": { "value": 28, "unit": "px" } },
  "paragraph-lg/paragraph-spacing": { "$type": "dimension", "$value": { "value": 24, "unit": "px" } },

  "paragraph-md/font-size":         { "$type": "dimension", "$value": { "value": 16, "unit": "px" } },
  "paragraph-md/line-height":       { "$type": "dimension", "$value": { "value": 24, "unit": "px" } },
  "paragraph-md/paragraph-spacing": { "$type": "dimension", "$value": { "value": 20, "unit": "px" } },

  "paragraph-sm/font-size":         { "$type": "dimension", "$value": { "value": 14, "unit": "px" } },
  "paragraph-sm/line-height":       { "$type": "dimension", "$value": { "value": 20, "unit": "px" } },
  "paragraph-sm/paragraph-spacing": { "$type": "dimension", "$value": { "value": 16, "unit": "px" } },

  "paragraph-xsm/font-size":         { "$type": "dimension", "$value": { "value": 12, "unit": "px" } },
  "paragraph-xsm/line-height":       { "$type": "dimension", "$value": { "value": 16, "unit": "px" } },
  "paragraph-xsm/paragraph-spacing": { "$type": "dimension", "$value": { "value": 12, "unit": "px" } }
}
```

- [ ] **Step 3: Validate both**
```bash
node -e "
  ['responsive-desktop','responsive-mobile'].forEach(f => {
    JSON.parse(require('fs').readFileSync('tokens/figma/' + f + '.json','utf8'));
    console.log('✓ ' + f);
  });
"
```

- [ ] **Step 4: Commit**
```bash
git add tokens/figma/responsive-desktop.json tokens/figma/responsive-mobile.json
git commit -m "feat(tokens): add responsive typography scale (desktop + mobile)"
```

---

## Task 5: Final validation

- [ ] **Step 1: Validate all files parse cleanly**
```bash
node -e "
  const fs = require('fs');
  ['primitives','semantic','mapped','responsive-desktop','responsive-mobile'].forEach(f => {
    const data = JSON.parse(fs.readFileSync('tokens/figma/' + f + '.json','utf8'));
    console.log('✓ ' + f + ' (' + Object.keys(data).length + ' tokens)');
  });
"
```

- [ ] **Step 2: Confirm deleted files are gone**
```bash
ls tokens/figma/
```
Expected: `mapped.json  primitives.json  responsive-desktop.json  responsive-mobile.json  semantic.json`

- [ ] **Step 3: Final commit**
```bash
git add -A
git commit -m "feat(tokens): complete design token system rebuild — Primitives/Semantic/Mapped/Responsive"
```

---

## Figma Import Notes

When importing into Figma Variables:

| JSON file | Collection name | Mode name |
|---|---|---|
| `primitives.json` | Primitives | Default |
| `semantic.json` | Semantic | Light |
| `mapped.json` | Mapped | Default |
| `responsive-desktop.json` | Responsive | Desktop |
| `responsive-mobile.json` | Responsive | Mobile |

Use the Tokens Studio or Figma Variables import plugin. For `Responsive`, import desktop first to create the collection, then import mobile as a second mode.
