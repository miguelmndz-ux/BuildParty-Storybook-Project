# Button Preview HTML Template Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `preview.html` at the project root — a standalone, zero-dependency page that renders the BuildParty Button atom (both variants + disabled states) in a realistic hero + CTA layout using the project's CSS design tokens.

**Architecture:** Single static HTML file with an inline `<style>` block. All CSS custom properties are copied verbatim from `src/index.css`. No build step, no React, no external dependencies. Button styles are hand-translated from `Button.tsx`'s Tailwind classes to plain CSS.

**Tech Stack:** HTML5, plain CSS (custom properties), no JavaScript.

---

## Chunk 1: Create `preview.html`

### Task 1: Write `preview.html`

**Files:**
- Create: `preview.html` (project root)

> **Note:** This is a static HTML file with no testable logic. Verification is visual — open the file in a browser and confirm rendering. No automated tests are needed or applicable.

- [ ] **Step 1: Create `preview.html` with tokens and CSS**

Create `preview.html` at the project root with the full inline `<style>` block. Paste all tokens exactly as they appear in `src/index.css` `:root` — do NOT paraphrase or approximate values.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Button Preview — BuildParty</title>
  <style>
    /* ── Design tokens (verbatim from src/index.css :root) ── */
    :root {
      /* Button tokens */
      --btn-primary-bg: #d97706;
      --btn-primary-text: #ffffff;
      --btn-outlined-text: #b45309;
      --btn-border-color: #b45309;
      --btn-padding-x: 16px;
      --btn-padding-y: 8px;
      --btn-radius: 8px;
      --btn-font-size: 14px;
      --btn-font-weight: 600;
      --btn-letter-spacing: 1px;
      --btn-line-height: 1.3;
      --btn-border-width: 2px;
      --btn-opacity-disabled: 0.5;

      /* Page tokens */
      --text: #6b6375;
      --text-h: #08060d;
      --bg: #ffffff;
      --border: #e5e4e7;
      --accent-bg: rgba(170, 59, 255, 0.1);
      --accent-border: rgba(170, 59, 255, 0.5);
      --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
    }

    /* ── Reset & base ── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: var(--sans);
      background: var(--bg);
      color: var(--text);
      font-size: 18px;
      line-height: 1.55;
      -webkit-font-smoothing: antialiased;
    }

    /* ── Layout wrapper ── */
    .page {
      max-width: 1126px;
      margin: 0 auto;
      border-inline: 1px solid var(--border);
      min-height: 100svh;
    }

    /* ── Navbar ── */
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 48px;
      height: 60px;
      border-bottom: 1px solid var(--border);
    }
    .navbar__logo {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-h);
      letter-spacing: 0.5px;
    }
    .navbar__links {
      display: flex;
      gap: 32px;
      list-style: none;
    }
    .navbar__links a {
      font-size: 14px;
      color: var(--text);
      text-decoration: none;
    }

    /* ── Hero section ── */
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 96px 48px 64px;
      gap: 24px;
    }
    .hero__headline {
      font-family: var(--sans);
      font-size: 52px;
      font-weight: 400;
      letter-spacing: -1.5px;
      line-height: 1.1;
      color: var(--text-h);
    }
    .hero__subtext {
      font-size: 18px;
      color: var(--text);
      max-width: 480px;
    }
    .button-group {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 8px;
    }

    /* ── Disabled state row ── */
    .disabled-row {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 0 48px 64px;
    }
    .disabled-row__caption {
      font-size: 12px;
      color: var(--text);
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
    .disabled-row__group {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .disabled-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    .disabled-item span {
      font-size: 11px;
      color: var(--text);
    }

    /* ── CTA band ── */
    .cta-band {
      background: var(--accent-bg);
      border-top: 1px solid var(--accent-border);
      border-bottom: 1px solid var(--accent-border);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 20px;
      padding: 64px 48px;
    }
    .cta-band__tagline {
      font-size: 24px;
      font-weight: 400;
      letter-spacing: -0.24px;
      color: var(--text-h);
    }

    /* ── Button — shared ── */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
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
      font-family: var(--sans);
    }

    /* ── Button — primary ── */
    .btn--primary {
      background: var(--btn-primary-bg);
      color: var(--btn-primary-text);
      border: 0;
      border-width: 0 0 2px 2px;
      border-color: var(--btn-border-color);
      border-style: solid;
    }

    /* ── Button — outline ── */
    .btn--outline {
      background: transparent;
      color: var(--btn-outlined-text);
      border-width: 2px;
      border-color: var(--btn-border-color);
    }

    /* ── Button — disabled ── */
    .btn--disabled {
      opacity: var(--btn-opacity-disabled);
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <div class="page">

    <!-- Navbar -->
    <nav class="navbar">
      <span class="navbar__logo">BuildParty</span>
      <ul class="navbar__links">
        <li><a href="#">Sessions</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Docs</a></li>
      </ul>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <h1 class="hero__headline">Build live.<br>Build together.</h1>
      <p class="hero__subtext">
        The live platform for AI builder communities — structured sessions,
        real-time interaction, and agents that participate.
      </p>
      <div class="button-group">
        <button class="btn btn--primary">Join a session</button>
        <button class="btn btn--outline">Learn more</button>
      </div>
    </section>

    <!-- Disabled state row -->
    <div class="disabled-row">
      <p class="disabled-row__caption">Disabled states</p>
      <div class="disabled-row__group">
        <div class="disabled-item">
          <button class="btn btn--primary btn--disabled" disabled>Join a session</button>
          <span>Primary — disabled</span>
        </div>
        <div class="disabled-item">
          <button class="btn btn--outline btn--disabled" disabled>Learn more</button>
          <span>Outline — disabled</span>
        </div>
      </div>
    </div>

    <!-- CTA band -->
    <section class="cta-band">
      <p class="cta-band__tagline">Your next build session starts now.</p>
      <button class="btn btn--primary">Start building</button>
    </section>

  </div>
</body>
</html>
```

- [ ] **Step 2: Verify visually in browser**

Open `preview.html` directly in a browser (double-click the file or use `File > Open`).

Confirm:
- Navbar renders with logo left, links right, bottom border visible
- Hero headline is large (~52px), subtext is smaller and muted
- Primary button: amber fill, white uppercase text, 3D bottom+left border effect
- Outline button: transparent, amber border and text, full perimeter
- Disabled row: both buttons at 50% opacity, labels beneath each
- CTA band: purple-tinted background, accent border top and bottom, centered primary button

If any token resolves incorrectly (e.g. a color shows as black), check the `:root` block in the `<style>` tag against `src/index.css`.

- [ ] **Step 3: Commit**

```bash
git add preview.html
git commit -m "feat: add button preview HTML template

Standalone preview.html showing Button atom (primary, outline, disabled)
in a hero + CTA page layout using project CSS design tokens only.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```
