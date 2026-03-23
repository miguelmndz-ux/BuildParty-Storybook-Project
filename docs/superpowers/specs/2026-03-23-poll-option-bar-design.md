# PollOptionBar — Design Spec

**Date:** 2026-03-23
**Status:** Approved
**Atomic level:** Atom

---

## Overview

`PollOptionBar` is a single-row poll option component for the BuildParty Interaction Rail (Polls tab). It displays a text label inside a horizontal progress-bar track, with an optional amber fill and percentage value. It is a static/display component for now; interactive voting behaviour will be wired up in a separate frontend session.

---

## Anatomy

A single row consisting of two parts:

1. **Track** (flex-grow) — a full-width rounded container with a neutral background. Contains:
   - **Fill** — an absolutely-positioned amber layer anchored to the left, width driven by `percentage` prop (clamped 0–100%). Carries `data-testid="poll-option-bar__fill"`. Not rendered at all when `state === "Voting"`.
   - **Label** — left-aligned text inside the track, sitting above the fill via z-index. In the `Winner` state a `Crown` icon (`Crown` from `@phosphor-icons/react`, 16px, `color="var(--btn-action)"`, `aria-hidden={true}`) appears immediately to the right of the label text.
2. **Percentage label** (fixed width, right of track) — shows `{percentage}%`, visible only in `Results` and `Winner` states.

```
┌─────────────────────────────────────────────────────┐  42%
│ Voice Assistant                   ░░░░░░░░░░░░░░░░  │
└─────────────────────────────────────────────────────┘
      ↑ neutral track
      ↑ amber fill (width = percentage%)
      ↑ label (z-index above fill)
                                                    ↑ percentage (right, outside track)
```

---

## States

| State | Fill | Percentage | Extra treatment |
|---|---|---|---|
| `Voting` | Hidden | Hidden | Neutral track only. Label in `--color-text-body`. Communicates vote is open. |
| `Results` | Visible | Visible | Amber fill at `percentage%`. Percentage in `--color-text-muted`. |
| `Winner` | Visible | Visible | Amber fill + `outline: 2px solid var(--btn-action)` on track. Label in `--color-text-heading`, `font-weight: 700`. `Crown` icon (`@phosphor-icons/react`, 16px, `color="var(--btn-action)"`, `aria-hidden={true}`) to the right of label text. |

---

## Props API

```jsx
<PollOptionBar
  label="Voice Assistant"   // string — option text (required)
  percentage={42}           // number 0–100 — fill width and display value
  state="Results"           // "Voting" | "Results" | "Winner" — default: "Voting"
/>
```

| Prop | Type | Default | Notes |
|---|---|---|---|
| `label` | string | — | Required. Option text shown inside the track. |
| `percentage` | number | `0` | Range 0–100 inclusive. Values above 100 are clamped to 100% by CSS (`max-width: 100%` on the fill). Ignored visually in `Voting` state. |
| `state` | `"Voting"` \| `"Results"` \| `"Winner"` | `"Voting"` | Controls fill visibility, percentage display, and Winner treatment. |

---

## Design Tokens

| Purpose | Token | Value |
|---|---|---|
| Track background | `--color-surface-disabled` | `#e7e5e4` |
| Amber fill | `--btn-action` | `#f59e0b` |
| Winner border ring | `--btn-action` | `#f59e0b` |
| Label (default) | `--color-text-body` | `#292524` |
| Label (Winner) | `--color-text-heading`, `font-weight: 700` | `#1c1917` |
| Percentage text | `--color-text-muted` | `#6b6375` |
| Crown icon color | passed as `color="var(--btn-action)"` directly on `<Crown>` | `#f59e0b` |
| Crown icon size | `--icon-sm` | `16px` (passed as `size={16}` prop) |
| Track border-radius | `--input-radius` | `12px` |
| Track padding | `--input-padding-y` / `--input-padding-x` | `10px 14px` |

---

## File Structure

```
src/components/atoms/PollOptionBar/
  PollOptionBar.jsx         ← named export, functional component
  PollOptionBar.css         ← co-located styles, var(--token) only
  PollOptionBar.stories.js  ← three story exports: Voting, Results, Winner
```

---

## Stories

| Story | `state` | `percentage` | Asserts |
|---|---|---|---|
| `Voting` | `"Voting"` | `42` | Label text present; fill element not in DOM (conditional render — `state === "Voting"` renders no fill element, so `queryByTestId('poll-option-bar__fill')` returns `null`) |
| `Results` | `"Results"` | `42` | Label text present; fill element in DOM (`getByTestId('poll-option-bar__fill')`); percentage text present |
| `Winner` | `"Winner"` | `42` | Label text present; fill element in DOM; Crown icon present (`aria-hidden`); outline applied |

Each story includes a `play` function exercising the component via `@storybook/test`.

---

## Out of Scope (this spec)

- Click / selection interactivity (future session)
- Animated fill transitions
- Multiple color palette variants beyond amber + neutral
- Poll container / list layout (future molecule: `PollOptions`)
