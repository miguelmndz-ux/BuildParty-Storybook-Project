import { fn, expect } from 'storybook/test';
import { Card } from './Card';

/** @type {import('@storybook/react-vite').Meta<typeof Card>} */
const meta = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Launch Day: AI Builder Showcase',
    description: 'Join us for a live showcase of the latest AI tools built by the community.',
    badge: { label: 'Agentic', variant: 'primary' },
    actionLabel: 'RSVP NOW',
    onAction: fn(),
  },
};

export default meta;

/** Session card with badge, title, description, and a primary CTA. */
export const Default = {
  play: async ({ canvasElement }) => {
    const card = canvasElement.querySelector('.card');
    await expect(card).toBeInTheDocument();

    const button = canvasElement.querySelector('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toBeEnabled();
  },
};
