# Button Token Studio JSON — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce four JSON files in `tokens/figma/` that implement the approved 3-tier token architecture and can be imported directly into Figma's native Variables panel.

**Architecture:** Figma Variables uses one JSON file per mode. Our 3-tier architecture maps to 3 Figma collections, imported in order: `Primitives` (1 file) → `Semantic` (2 files = light + dark modes imported simultaneously) → `Component/Button` (1 file). Cross-collection aliases use `$extensions.com.figma.aliasData`.

**Format rules (Figma native DTCG):**
- Colors: `{ "colorSpace": "srgb", "components": [R, G, B], "alpha": 1, "hex": "#rrggbb" }` — RGB as 0–1 floats
- Dimensions: `{ "value": N, "unit": "px" }` — numeric value, not a string
- Font weight: `$type: "number"` (Figma has no fontWeight type)
- Same-collection alias: `"$value": "{token-name}"`
- Cross-collection alias: resolved `$value` + `"$extensions": { "com.figma.aliasData": { "collection": "...", "name": "..." } }`

**Import order matters:** Primitives must exist before Semantic is imported; Semantic must exist before Component/Button is imported — so cross-collection aliases can resolve.

**Spec:** `docs/superpowers/specs/2026-03-16-button-token-architecture-design.md`

---

## Chunk 1: Generate and validate all four JSON files

### Task 1: Create `tokens/figma/primitives.json`

**Files:**
- Create: `tokens/figma/primitives.json`

All primitives are raw values — no aliases. Colors use sRGB float components. Dimensions use `{ value, unit }` objects.

- [ ] **Step 1: Create `tokens/figma/` directory and write `primitives.json`**

  Create `tokens/figma/primitives.json`:

  ```json
  {
    "color-amber-400": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9843, 0.7490, 0.1412], "alpha": 1, "hex": "#fbbf24" } },
    "color-amber-500": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9608, 0.6196, 0.0431], "alpha": 1, "hex": "#f59e0b" } },
    "color-amber-600": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.8510, 0.4667, 0.0235], "alpha": 1, "hex": "#d97706" } },
    "color-amber-700": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.7059, 0.3255, 0.0353], "alpha": 1, "hex": "#b45309" } },
    "color-neutral-0":   { "$type": "color", "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "alpha": 1, "hex": "#ffffff" } },
    "color-neutral-50":  { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.9804, 0.9804, 0.9725], "alpha": 1, "hex": "#fafaf8" } },
    "color-neutral-400": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.6588, 0.6353, 0.6196], "alpha": 1, "hex": "#a8a29e" } },
    "color-neutral-900": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1098, 0.0980, 0.0902], "alpha": 1, "hex": "#1c1917" } },
    "color-warm-950":    { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.1020, 0.0706, 0.0314], "alpha": 1, "hex": "#1a1208" } },
    "sizing-0":   { "$type": "dimension", "$value": { "value": 0,    "unit": "px" } },
    "sizing-1":   { "$type": "dimension", "$value": { "value": 4,    "unit": "px" } },
    "sizing-2":   { "$type": "dimension", "$value": { "value": 8,    "unit": "px" } },
    "sizing-3":   { "$type": "dimension", "$value": { "value": 12,   "unit": "px" } },
    "sizing-4":   { "$type": "dimension", "$value": { "value": 16,   "unit": "px" } },
    "sizing-5":   { "$type": "dimension", "$value": { "value": 24,   "unit": "px" } },
    "sizing-max": { "$type": "dimension", "$value": { "value": 9999, "unit": "px" } },
    "border-width-1": { "$type": "dimension", "$value": { "value": 1, "unit": "px" } },
    "border-width-2": { "$type": "dimension", "$value": { "value": 2, "unit": "px" } },
    "font-family-sans":     { "$type": "fontFamily", "$value": "Mona Sans" },
    "font-size-sm":         { "$type": "dimension",  "$value": { "value": 14, "unit": "px" } },
    "font-size-md":         { "$type": "dimension",  "$value": { "value": 16, "unit": "px" } },
    "font-weight-regular":  { "$type": "number",     "$value": 400 },
    "font-weight-medium":   { "$type": "number",     "$value": 500 },
    "font-weight-semibold": { "$type": "number",     "$value": 600 }
  }
  ```

- [ ] **Step 2: Verify valid JSON**

  ```bash
  node -e "JSON.parse(require('fs').readFileSync('tokens/figma/primitives.json','utf8')); console.log('Valid JSON')"
  ```
  Expected: `Valid JSON`

- [ ] **Step 3: Verify token count**

  ```bash
  node -e "const t=JSON.parse(require('fs').readFileSync('tokens/figma/primitives.json','utf8')); console.log('Primitives:',Object.keys(t).length,'(expected 24)')"
  ```
  Expected: `Primitives: 24 (expected 24)`

- [ ] **Step 4: Commit**

  ```bash
  git add tokens/figma/primitives.json
  git commit -m "feat: add Figma Variables primitives.json"
  ```

---

### Task 2: Create `tokens/figma/semantic-light.json`

**Files:**
- Create: `tokens/figma/semantic-light.json`

Semantic tokens reference primitives via `$extensions.com.figma.aliasData`. The `$value` holds the resolved fallback. Non-color tokens (padding, radius, border-width) are the same in both modes — they still appear in this file with their resolved values.

- [ ] **Step 1: Write `semantic-light.json`**

  Create `tokens/figma/semantic-light.json`:

  ```json
  {
    "color-action-bg": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [0.8510, 0.4667, 0.0235], "alpha": 1, "hex": "#d97706" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "color-amber-600" } }
    },
    "color-on-action": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "alpha": 1, "hex": "#ffffff" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "color-neutral-0" } }
    },
    "color-action-emphasis": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [0.8510, 0.4667, 0.0235], "alpha": 1, "hex": "#d97706" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "color-amber-600" } }
    },
    "color-surface-default": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "alpha": 1, "hex": "#ffffff" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "color-neutral-0" } }
    },
    "color-text-on-surface": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [0.1098, 0.0980, 0.0902], "alpha": 1, "hex": "#1c1917" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "color-neutral-900" } }
    },
    "padding-none": {
      "$type": "dimension",
      "$value": { "value": 0, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-0" } }
    },
    "padding-xxs": {
      "$type": "dimension",
      "$value": { "value": 4, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-1" } }
    },
    "padding-xs": {
      "$type": "dimension",
      "$value": { "value": 8, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-2" } }
    },
    "padding-sm": {
      "$type": "dimension",
      "$value": { "value": 12, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-3" } }
    },
    "padding-md": {
      "$type": "dimension",
      "$value": { "value": 16, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-4" } }
    },
    "padding-lg": {
      "$type": "dimension",
      "$value": { "value": 24, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-5" } }
    },
    "radius-none": {
      "$type": "dimension",
      "$value": { "value": 0, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-0" } }
    },
    "radius-sm": {
      "$type": "dimension",
      "$value": { "value": 8, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-2" } }
    },
    "radius-md": {
      "$type": "dimension",
      "$value": { "value": 12, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-3" } }
    },
    "radius-full": {
      "$type": "dimension",
      "$value": { "value": 9999, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-max" } }
    },
    "border-width-default": {
      "$type": "dimension",
      "$value": { "value": 1, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "border-width-1" } }
    }
  }
  ```

- [ ] **Step 2: Verify valid JSON**

  ```bash
  node -e "JSON.parse(require('fs').readFileSync('tokens/figma/semantic-light.json','utf8')); console.log('Valid JSON — tokens:', Object.keys(JSON.parse(require('fs').readFileSync('tokens/figma/semantic-light.json','utf8'))).length)"
  ```
  Expected: `Valid JSON — tokens: 16`

- [ ] **Step 3: Commit**

  ```bash
  git add tokens/figma/semantic-light.json
  git commit -m "feat: add Figma Variables semantic-light.json"
  ```

---

### Task 3: Create `tokens/figma/semantic-dark.json`

**Files:**
- Create: `tokens/figma/semantic-dark.json`

Dark mode file must contain **all the same token names** as `semantic-light.json` with the same `$type` values — Figma only creates a variable if it appears in all imported files for a collection. The 5 color tokens get different primitive aliases; all other tokens are identical in value to light mode.

- [ ] **Step 1: Write `semantic-dark.json`**

  Create `tokens/figma/semantic-dark.json`:

  ```json
  {
    "color-action-bg": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [0.9608, 0.6196, 0.0431], "alpha": 1, "hex": "#f59e0b" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "color-amber-500" } }
    },
    "color-on-action": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "alpha": 1, "hex": "#ffffff" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "color-neutral-0" } }
    },
    "color-action-emphasis": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [0.9608, 0.6196, 0.0431], "alpha": 1, "hex": "#f59e0b" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "color-amber-500" } }
    },
    "color-surface-default": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [0.1020, 0.0706, 0.0314], "alpha": 1, "hex": "#1a1208" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "color-warm-950" } }
    },
    "color-text-on-surface": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [0.6588, 0.6353, 0.6196], "alpha": 1, "hex": "#a8a29e" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "color-neutral-400" } }
    },
    "padding-none": {
      "$type": "dimension",
      "$value": { "value": 0, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-0" } }
    },
    "padding-xxs": {
      "$type": "dimension",
      "$value": { "value": 4, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-1" } }
    },
    "padding-xs": {
      "$type": "dimension",
      "$value": { "value": 8, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-2" } }
    },
    "padding-sm": {
      "$type": "dimension",
      "$value": { "value": 12, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-3" } }
    },
    "padding-md": {
      "$type": "dimension",
      "$value": { "value": 16, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-4" } }
    },
    "padding-lg": {
      "$type": "dimension",
      "$value": { "value": 24, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-5" } }
    },
    "radius-none": {
      "$type": "dimension",
      "$value": { "value": 0, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-0" } }
    },
    "radius-sm": {
      "$type": "dimension",
      "$value": { "value": 8, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-2" } }
    },
    "radius-md": {
      "$type": "dimension",
      "$value": { "value": 12, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-3" } }
    },
    "radius-full": {
      "$type": "dimension",
      "$value": { "value": 9999, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "sizing-max" } }
    },
    "border-width-default": {
      "$type": "dimension",
      "$value": { "value": 1, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "border-width-1" } }
    }
  }
  ```

- [ ] **Step 2: Verify light and dark files have identical token names and types**

  ```bash
  node -e "
  const light = JSON.parse(require('fs').readFileSync('tokens/figma/semantic-light.json','utf8'));
  const dark  = JSON.parse(require('fs').readFileSync('tokens/figma/semantic-dark.json','utf8'));
  const lk = Object.keys(light).sort().join(',');
  const dk = Object.keys(dark).sort().join(',');
  if (lk !== dk) { console.error('Key mismatch:', lk, '!=', dk); process.exit(1); }
  let typeMismatch = false;
  for (const k of Object.keys(light)) {
    if (light[k]['\$type'] !== dark[k]['\$type']) {
      console.error('Type mismatch on', k, ':', light[k]['\$type'], '!=', dark[k]['\$type']);
      typeMismatch = true;
    }
  }
  if (!typeMismatch) console.log('Light and dark match:', Object.keys(light).length, 'tokens, all types consistent');
  "
  ```
  Expected: `Light and dark match: 16 tokens, all types consistent`

- [ ] **Step 3: Commit**

  ```bash
  git add tokens/figma/semantic-dark.json
  git commit -m "feat: add Figma Variables semantic-dark.json"
  ```

---

### Task 4: Create `tokens/figma/component-button.json`

**Files:**
- Create: `tokens/figma/component-button.json`

Component tokens reference the Semantic collection via `$extensions.com.figma.aliasData`. Typography tokens (`font-family`, `font-size`, `font-weight`) reference the Primitives collection directly — they have no semantic alias.

- [ ] **Step 1: Write `component-button.json`**

  Create `tokens/figma/component-button.json`:

  ```json
  {
    "button-primary-bg": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [0.8510, 0.4667, 0.0235], "alpha": 1, "hex": "#d97706" },
      "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-action-bg" } }
    },
    "button-primary-text": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "alpha": 1, "hex": "#ffffff" },
      "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-on-action" } }
    },
    "button-outlined-bg": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "alpha": 1, "hex": "#ffffff" },
      "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-surface-default" } }
    },
    "button-outlined-text": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [0.8510, 0.4667, 0.0235], "alpha": 1, "hex": "#d97706" },
      "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-action-emphasis" } }
    },
    "button-outlined-border": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [0.8510, 0.4667, 0.0235], "alpha": 1, "hex": "#d97706" },
      "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "color-action-emphasis" } }
    },
    "button-outlined-border-width": {
      "$type": "dimension",
      "$value": { "value": 1, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "border-width-default" } }
    },
    "button-padding-y": {
      "$type": "dimension",
      "$value": { "value": 12, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "padding-sm" } }
    },
    "button-padding-x": {
      "$type": "dimension",
      "$value": { "value": 24, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "padding-lg" } }
    },
    "button-radius": {
      "$type": "dimension",
      "$value": { "value": 8, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Semantic", "name": "radius-sm" } }
    },
    "button-font-family": {
      "$type": "fontFamily",
      "$value": "Mona Sans",
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "font-family-sans" } }
    },
    "button-font-size": {
      "$type": "dimension",
      "$value": { "value": 14, "unit": "px" },
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "font-size-sm" } }
    },
    "button-font-weight": {
      "$type": "number",
      "$value": 600,
      "$extensions": { "com.figma.aliasData": { "collection": "Primitives", "name": "font-weight-semibold" } }
    }
  }
  ```

- [ ] **Step 2: Verify valid JSON and token count**

  ```bash
  node -e "const t=JSON.parse(require('fs').readFileSync('tokens/figma/component-button.json','utf8')); console.log('Valid JSON — tokens:', Object.keys(t).length, '(expected 12)')"
  ```
  Expected: `Valid JSON — tokens: 12 (expected 12)`

- [ ] **Step 3: Commit**

  ```bash
  git add tokens/figma/component-button.json
  git commit -m "feat: add Figma Variables component-button.json — all 4 token files complete"
  ```

---

### Task 5: Import into Figma Variables (manual)

Import order is critical — each collection must exist before a collection that aliases it is imported.

- [ ] **Step 1: Import Primitives**

  In Figma Variables panel:
  1. Click **Import**
  2. Select `tokens/figma/primitives.json`
  3. When prompted for a collection name, enter: `Primitives`
  4. Verify 24 variables appear under one mode

- [ ] **Step 2: Import Semantic (both modes at once)**

  1. Click **Import**
  2. Select **both** `tokens/figma/semantic-light.json` and `tokens/figma/semantic-dark.json` simultaneously (hold Shift or Cmd/Ctrl to multi-select)
  3. When prompted, enter collection name: `Semantic`
  4. Name the two modes `light` and `dark`
  5. Verify 16 variables appear with 2 modes

- [ ] **Step 3: Import Component/Button**

  1. Click **Import**
  2. Select `tokens/figma/component-button.json`
  3. Collection name: `Component/Button`
  4. Verify 12 variables appear

- [ ] **Step 4: Spot-check aliases resolve**

  In the Variables panel, click any semantic color token — e.g. `color-action-bg`. It should show:
  - Light mode: alias to `Primitives/color-amber-600` → `#d97706`
  - Dark mode: alias to `Primitives/color-amber-500` → `#f59e0b`

  Click `button-primary-bg` in Component/Button — it should alias to `Semantic/color-action-bg`.

- [ ] **Step 5: Verify mode switching**

  In any Figma frame, apply `color-action-bg` to a shape. Switch between `light` and `dark` modes on the Semantic collection — the color should change from amber-600 to amber-500.
