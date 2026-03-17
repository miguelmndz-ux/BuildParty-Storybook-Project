import { expect } from 'storybook/test';
import { Typography } from './Typography';

// Light-mode token values from Figma:
//   Text/heading → --text-h  → #1c1917 → rgb(28, 25, 23)
//   Text/body    → --text-body → #292524 → rgb(41, 37, 36)
const COLOR_HEADING = 'rgb(28, 25, 23)';
const COLOR_BODY    = 'rgb(41, 37, 36)';

/** @type {import('@storybook/react-vite').Meta<typeof Typography>} */
const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
        'paragraph-lg', 'paragraph-md', 'paragraph-sm', 'paragraph-xsm',
      ],
      description: 'Type scale variant — headings use the heading font (Bold 700), paragraphs use the body font (Regular 400).',
      table: { defaultValue: { summary: 'paragraph-md' } },
    },
    as: {
      control: 'text',
      description: 'Override the rendered HTML element (e.g. span, label).',
    },
    children: {
      control: 'text',
      description: 'Text content.',
    },
  },
};

export default meta;

// ── Headings ────────────────────────────────────────────────────────────────

/** 60px / 72lh · Bold · Heading font · color: #1c1917 */
export const H1 = {
  args: { variant: 'H1', children: 'Heading 1' },
  play: async ({ canvas }) => {
    const el = canvas.getByRole('heading', { level: 1 });
    await expect(el).toBeVisible();
    await expect(el).toHaveTextContent('Heading 1');
    expect(window.getComputedStyle(el).color).toBe(COLOR_HEADING);
  },
};

/** 48px / 58lh · Bold · Heading font · color: #1c1917 */
export const H2 = {
  args: { variant: 'H2', children: 'Heading 2' },
  play: async ({ canvas }) => {
    const el = canvas.getByRole('heading', { level: 2 });
    await expect(el).toBeVisible();
    await expect(el).toHaveTextContent('Heading 2');
    expect(window.getComputedStyle(el).color).toBe(COLOR_HEADING);
  },
};

/** 40px / 48lh · Bold · Heading font · color: #1c1917 */
export const H3 = {
  args: { variant: 'H3', children: 'Heading 3' },
  play: async ({ canvas }) => {
    const el = canvas.getByRole('heading', { level: 3 });
    await expect(el).toBeVisible();
    await expect(el).toHaveTextContent('Heading 3');
    expect(window.getComputedStyle(el).color).toBe(COLOR_HEADING);
  },
};

/** 32px / 40lh · Bold · Heading font · color: #1c1917 */
export const H4 = {
  args: { variant: 'H4', children: 'Heading 4' },
  play: async ({ canvas }) => {
    const el = canvas.getByRole('heading', { level: 4 });
    await expect(el).toBeVisible();
    await expect(el).toHaveTextContent('Heading 4');
    expect(window.getComputedStyle(el).color).toBe(COLOR_HEADING);
  },
};

/** 24px / 28lh · Bold · Heading font · color: #1c1917 */
export const H5 = {
  args: { variant: 'H5', children: 'Heading 5' },
  play: async ({ canvas }) => {
    const el = canvas.getByRole('heading', { level: 5 });
    await expect(el).toBeVisible();
    await expect(el).toHaveTextContent('Heading 5');
    expect(window.getComputedStyle(el).color).toBe(COLOR_HEADING);
  },
};

/** 20px / 24lh · Bold · Heading font · color: #1c1917 */
export const H6 = {
  args: { variant: 'H6', children: 'Heading 6' },
  play: async ({ canvas }) => {
    const el = canvas.getByRole('heading', { level: 6 });
    await expect(el).toBeVisible();
    await expect(el).toHaveTextContent('Heading 6');
    expect(window.getComputedStyle(el).color).toBe(COLOR_HEADING);
  },
};

// ── Paragraphs ───────────────────────────────────────────────────────────────

/** 20px / 28lh · Regular · Body font · color: #292524 */
export const ParagraphLg = {
  name: 'paragraph-lg',
  args: {
    variant: 'paragraph-lg',
    children: 'BuildParty brings builders together for live, structured sessions with AI agents as first-class participants.',
  },
  play: async ({ canvas }) => {
    const el = canvas.getByText(/BuildParty brings/i);
    await expect(el).toBeVisible();
    expect(window.getComputedStyle(el).color).toBe(COLOR_BODY);
  },
};

/** 16px / 24lh · Regular · Body font · color: #292524 */
export const ParagraphMd = {
  name: 'paragraph-md',
  args: {
    variant: 'paragraph-md',
    children: 'BuildParty brings builders together for live, structured sessions with AI agents as first-class participants.',
  },
  play: async ({ canvas }) => {
    const el = canvas.getByText(/BuildParty brings/i);
    await expect(el).toBeVisible();
    expect(window.getComputedStyle(el).color).toBe(COLOR_BODY);
  },
};

/** 14px / 20lh · Regular · Body font · color: #292524 */
export const ParagraphSm = {
  name: 'paragraph-sm',
  args: {
    variant: 'paragraph-sm',
    children: 'BuildParty brings builders together for live, structured sessions with AI agents as first-class participants.',
  },
  play: async ({ canvas }) => {
    const el = canvas.getByText(/BuildParty brings/i);
    await expect(el).toBeVisible();
    expect(window.getComputedStyle(el).color).toBe(COLOR_BODY);
  },
};

/** 12px / 16lh · Regular · Body font · color: #292524 */
export const ParagraphXsm = {
  name: 'paragraph-xsm',
  args: {
    variant: 'paragraph-xsm',
    children: 'BuildParty brings builders together for live, structured sessions with AI agents as first-class participants.',
  },
  play: async ({ canvas }) => {
    const el = canvas.getByText(/BuildParty brings/i);
    await expect(el).toBeVisible();
    expect(window.getComputedStyle(el).color).toBe(COLOR_BODY);
  },
};
