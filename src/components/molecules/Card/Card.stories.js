import { fn } from 'storybook/test';
import { Card } from './Card';

/** @type {import('@storybook/react-vite').Meta<typeof Card>} */
const meta = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Launch Day: AI Builder Showcase',
    description: 'Join us for a live showcase of the latest AI tools built by the community.',
    thumbnail: 'https://placehold.co/320x180/f59e0b/1c1917?text=BuildParty',
    badge: { label: 'Agentic', variant: 'primary' },
    meta: 'Mar 17, 2026 · 42 attendees',
    action: { label: 'JOIN', onClick: fn() },
    onClick: fn(),
    state: 'default',
  },
};

export default meta;

/** Default card — all slots filled, ready for interaction. */
export const Default = {};

/** Selected state — amber accent border indicates active/chosen card. */
export const Selected = {
  args: {
    state: 'selected',
  },
};

/** Disabled state — 50% opacity, non-interactive. */
export const Disabled = {
  args: {
    state: 'disabled',
  },
};
