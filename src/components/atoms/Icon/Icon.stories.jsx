import React from 'react';
import { expect } from 'storybook/test';
import { User } from '../../../lib/icons';
import { Icon, ICON_SIZE_PX } from './Icon';

/** @type {import('@storybook/react-vite').Meta<typeof Icon>} */
const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xsm'],
      description: 'Size variant — maps to Figma Icons/icon-* tokens (32 / 24 / 20 / 16 / 12px).',
      table: { defaultValue: { summary: 'md' } },
    },
    label: {
      control: 'text',
      description: 'Accessible label for meaningful icons. Omit for decorative use (aria-hidden).',
    },
  },
  render: (args) => (
    <Icon {...args}>
      <User size={ICON_SIZE_PX[args.size ?? 'md']} />
    </Icon>
  ),
};

export default meta;

// ── Size variants ────────────────────────────────────────────────────────────

/** 32px — Icons/icon-xl */
export const Xl = {
  args: { size: 'xl' },
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector('.icon');
    await expect(el).toBeInTheDocument();
  },
};

/** 24px — Icons/icon-lg */
export const Lg = {
  args: { size: 'lg' },
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector('.icon');
    await expect(el).toBeInTheDocument();
  },
};

/** 20px — Icons/icon-md */
export const Md = {
  args: { size: 'md' },
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector('.icon');
    await expect(el).toBeInTheDocument();
  },
};

/** 16px — Icons/icon-sm */
export const Sm = {
  args: { size: 'sm' },
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector('.icon');
    await expect(el).toBeInTheDocument();
  },
};

/** 12px — Icons/icon-xsm */
export const Xsm = {
  args: { size: 'xsm' },
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector('.icon');
    await expect(el).toBeInTheDocument();
  },
};

/** Meaningful icon with aria-label — screen-reader accessible */
export const WithLabel = {
  args: { size: 'lg', label: 'User profile' },
  play: async ({ canvas }) => {
    const el = canvas.getByRole('img', { name: 'User profile' });
    await expect(el).toBeVisible();
  },
};
