# CLAUDE.md — buildparty-storybook

## Product Context — BuildParty

BuildParty is a **live, agent-native platform** for AI builder communities. Sessions combine a live stage, structured agenda, and real-time audience interaction (chat, Q&A, polls) — with AI agents as first-class session participants.

### Core session surfaces
| Surface | Description |
|---|---|
| **Stage** | Presenter video / screen-share area |
| **Agenda rail** | Structured agenda: pre-party → main event → after-party |
| **Interaction rail** | Tabbed panel: Chat / Q&A / Polls |
| **Green room** | Backstage strip for participants and speakers |
| **Session recap** | AI-generated summary shown at session end |

### AI agents (visible UI presence, not background services)
| Agent | Role |
|---|---|
| **Nova** | AI Host — moderation, timing, transitions |
| **Echo** | Session Memory — recap, action items |
| **Orbit** | Build Buddy — light builder assistance |

### Session types
Launch Day · Demo Session · Creator Class · Mainstage (co-watch) · Office Hours / AMA · CoBuild

---

## Tech Stack

### Core
| Package | Version |
|---|---|
| React | ^19.2.4 |
| React DOM | ^19.2.4 |
| Vite | ^8.0.0 |

### Storybook
| Package | Version |
|---|---|
| storybook | ^10.2.19 |
| @storybook/react-vite | ^10.2.19 |
| @storybook/addon-a11y | ^10.2.19 |
| @storybook/addon-docs | ^10.2.19 |
| @storybook/addon-mcp | ^0.4.1 |
| @storybook/addon-onboarding | ^10.2.19 |
| @storybook/addon-vitest | ^10.2.19 |
| @chromatic-com/storybook | ^5.0.1 |

### Testing
| Package | Version |
|---|---|
| vitest | ^4.1.0 |
| @vitest/browser-playwright | ^4.1.0 |
| @vitest/coverage-v8 | ^4.1.0 |
| playwright | ^1.58.2 |

### Utilities
| Package | Version |
|---|---|
| prop-types | ^15.8.1 |
| eslint | ^9.39.4 |
| eslint-plugin-storybook | ^10.2.19 |
| eslint-plugin-react-hooks | ^7.0.1 |

### Do NOT use
- **Class components** — use functional components with hooks only
- **CSS-in-JS libraries** (styled-components, emotion) — use plain CSS files co-located with components
- **Redux or Zustand** — no global state library is installed; keep state local or use React context
- **TypeScript** — this project uses plain JSX/JS (no tsconfig, no .ts/.tsx files)
- **Sass/SCSS/Less** — use standard CSS with custom properties
- **React Router** — not installed; no routing needed
- **Any testing library other than Vitest + Playwright** — do not add Jest or Testing Library

---

## Storybook Rule

When working with Storybook, always query the Storybook MCP server first to check what components already exist before creating new ones.

---

## Atomic Build Order

Components must be built strictly bottom-up:

```
atoms → molecules → organisms → templates → pages
```

**Rules:**
1. Always build atoms before molecules before organisms.
2. Never build a composite component if any of its atomic children are missing.
3. Before starting a molecule or organism, verify all dependencies exist in `src/components/` and have a corresponding `.stories.js` file.
4. A component is not considered "done" until its story is written and renders without errors.

Components emerge from design exploration — do not predefine them. Check Storybook MCP for what already exists before creating anything new.

---

## Design Token Mapping

CSS custom properties are defined in `src/index.css`. Tokens here are **placeholders** — update them as you define your actual design system. Map Figma variables to these tokens when implementing designs.

### Color Tokens
| Figma Variable | CSS Custom Property | Light Value | Dark Value |
|---|---|---|---|
| `colors/text/default` | `var(--text)` | `#6b6375` | `#9ca3af` |
| `colors/text/heading` | `var(--text-h)` | `#08060d` | `#f3f4f6` |
| `colors/background/default` | `var(--bg)` | `#ffffff` | `#16171d` |
| `colors/border/default` | `var(--border)` | `#e5e4e7` | `#2e303a` |
| `colors/accent/default` | `var(--accent)` | `#aa3bff` | `#c084fc` |
| `colors/accent/background` | `var(--accent-bg)` | `rgba(170,59,255,0.1)` | `rgba(192,132,252,0.15)` |
| `colors/accent/border` | `var(--accent-border)` | `rgba(170,59,255,0.5)` | `rgba(192,132,252,0.5)` |
| `colors/code/background` | `var(--code-bg)` | `#f4f3ec` | `#1f2028` |

### Typography Tokens
| Figma Variable | CSS Custom Property | Value |
|---|---|---|
| `typography/font/sans` | `var(--sans)` | `system-ui, 'Segoe UI', Roboto, sans-serif` |
| `typography/font/heading` | `var(--heading)` | `system-ui, 'Segoe UI', Roboto, sans-serif` |
| `typography/font/mono` | `var(--mono)` | `ui-monospace, Consolas, monospace` |

### Placeholder Mappings (add real Figma variable names when available)
| Figma Variable | CSS / Value |
|---|---|
| `spacing/sm` | `8px` |
| `spacing/md` | `16px` |
| `spacing/lg` | `32px` |
| `radius/default` | `4px` |
| `shadow/default` | `var(--shadow)` |

---

## Key Folder Paths

| Purpose | Path |
|---|---|
| Source root | `src/` |
| App entry | `src/main.jsx` |
| Global styles / tokens | `src/index.css` |
| Stories & default components | `src/stories/` |
| Static assets (app) | `src/assets/` |
| Story documentation assets | `src/stories/assets/` |
| Storybook config | `.storybook/` |
| Storybook main config | `.storybook/main.js` |
| Storybook preview config | `.storybook/preview.js` |
| Vitest setup | `.storybook/vitest.setup.js` |
| MCP server config | `.mcp.json` (Storybook MCP at `http://localhost:6006/mcp`) |

### Planned atomic structure (create as needed)
```
src/
  components/
    atoms/        ← smallest, no dependencies on other components
    molecules/    ← composed of atoms only
    organisms/    ← composed of atoms and/or molecules
    templates/    ← page layouts, no real data
  stories/        ← existing Storybook default stories
```

---

## Figma → Code Workflow

1. Pull design context with `get_design_context` (Figma MCP)
2. Check Storybook MCP for existing components before creating new ones
3. Map Figma variables to tokens in `src/index.css` — add new tokens as needed
4. Build component + co-located CSS file (`ComponentName.jsx` + `ComponentName.css`)
5. Write story → preview via Storybook MCP (`preview-stories`)
6. Add Code Connect mapping once the Figma component is stable

---

## Scripts

```bash
npm run dev            # Vite dev server
npm run storybook      # Storybook dev server on :6006
npm run build          # Production build
npm run build-storybook # Static Storybook build
npm run lint           # ESLint
```
