import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, userEvent, expect, within } from 'storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline'],
      description: 'Visual variant of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Renders the button at 50% opacity and prevents interaction',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Button label text',
      table: {
        defaultValue: { summary: 'BUTTON' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/** Filled amber button — the default action style. */
export const Primary: Story = {
  args: {
    label: 'BUTTON',
    variant: 'primary',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /button/i });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await userEvent.click(button);
  },
};

/** Transparent button with an amber border — for secondary actions. */
export const Outlined: Story = {
  args: {
    label: 'BUTTON',
    variant: 'outline',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /button/i });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await expect(button).not.toHaveClass('bg-btn-primary-bg');
  },
};

/**
 * Disabled state — shown as Primary by default.
 * Toggle the `variant` control to `outline` to preview the disabled outline style.
 */
export const Disabled: Story = {
  args: {
    label: 'BUTTON',
    variant: 'primary',
    disabled: true,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /button/i });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};
