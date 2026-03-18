import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, userEvent, expect } from 'storybook/test';
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
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: /button/i });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

/** Transparent button with an amber border — for secondary actions. */
export const Outlined: Story = {
  args: {
    label: 'BUTTON',
    variant: 'outline',
    disabled: false,
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: /button/i });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

/** Primary button in disabled state — opacity 50%, click does nothing. */
export const DisabledPrimary: Story = {
  args: {
    label: 'BUTTON',
    variant: 'primary',
    disabled: true,
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: /button/i });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

/** Outline button in disabled state — opacity 50%, click does nothing. */
export const DisabledOutline: Story = {
  args: {
    label: 'BUTTON',
    variant: 'outline',
    disabled: true,
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: /button/i });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};
