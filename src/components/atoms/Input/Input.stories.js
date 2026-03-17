import { fn, userEvent, expect } from 'storybook/test';
import { Input } from './Input';

/** @type {import('@storybook/react-vite').Meta} */
const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when the field is empty',
      table: { defaultValue: { summary: 'Placeholder' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input — grey background, muted text, no interaction',
      table: { defaultValue: { summary: 'false' } },
    },
    showIconLeft: {
      control: 'boolean',
      description: 'Show the leading (left) icon',
      table: { defaultValue: { summary: 'true' } },
    },
    showIconRight: {
      control: 'boolean',
      description: 'Show the trailing (right) icon',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;

/**
 * Default resting state — white background, grey border.
 * User can type freely; onChange fires on each keystroke.
 */
export const Default = {
  args: {
    placeholder: 'Placeholder',
    disabled: false,
  },
  play: async ({ canvas, args }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeVisible();
    await expect(input).toBeEnabled();
    await userEvent.type(input, 'Hello BuildParty');
    await expect(input).toHaveValue('Hello BuildParty');
    await expect(args.onChange).toHaveBeenCalled();
  },
};

/**
 * Hover state — amber border appears when the pointer is over the input.
 * The amber border is CSS-driven via `:hover` on `.input-root`.
 */
export const Hover = {
  args: {
    placeholder: 'Placeholder',
    disabled: false,
  },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeEnabled();
    // Hover triggers the CSS :hover border-color change on the wrapper
    await userEvent.hover(input);
    await expect(input).toBeVisible();
  },
};

/**
 * Disabled state — grey background, muted text/icons.
 * The input is inert: typing and onChange are both suppressed.
 */
export const Disabled = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
  },
  play: async ({ canvas, args }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeDisabled();
    // userEvent skips interaction on disabled inputs
    await userEvent.type(input, 'should not register');
    await expect(args.onChange).not.toHaveBeenCalled();
    await expect(input).toHaveValue('');
  },
};
