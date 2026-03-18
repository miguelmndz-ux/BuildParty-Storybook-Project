import { useState } from 'react';
import { fn, expect, userEvent } from 'storybook/test';
import Checkbox from './Checkbox';

/**
 * Wrapper that manages its own checked state so stories are interactive.
 * `initialChecked` sets the starting value; clicks toggle from there.
 */
function CheckboxToggle({ state, onChange, initialChecked = false }) {
  const [checked, setChecked] = useState(initialChecked);
  return (
    <Checkbox
      state={state}
      checked={checked}
      onChange={() => {
        setChecked((c) => !c);
        onChange?.();
      }}
    />
  );
}

/** @type {import('@storybook/react-vite').Meta} */
const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hover', 'Pressed', 'Disabled'],
      description: 'Visual / interaction state — maps to Figma `state` property',
      table: { defaultValue: { summary: 'Default' } },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked — maps to Figma `status` property',
      table: { defaultValue: { summary: 'false' } },
    },
    onChange: {
      description: 'Callback fired when the checkbox is toggled',
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;

/** Default unchecked — click once to check, click again to uncheck. */
export const Default = {
  render: ({ state, onChange }) => (
    <CheckboxToggle state={state} onChange={onChange} initialChecked={false} />
  ),
  args: { state: 'Default' },
  play: async ({ canvas, args }) => {
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');

    // click → becomes checked
    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
    await expect(args.onChange).toHaveBeenCalledOnce();

    // click again → back to unchecked
    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
    await expect(args.onChange).toHaveBeenCalledTimes(2);
  },
};

/** Hover visual state — light amber bg. Toggle still works. */
export const Hover = {
  render: ({ state, onChange }) => (
    <CheckboxToggle state={state} onChange={onChange} initialChecked={false} />
  ),
  args: { state: 'Hover' },
  play: async ({ canvas, args }) => {
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).toHaveAttribute('data-state', 'hover');
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');

    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
    await expect(args.onChange).toHaveBeenCalledOnce();
  },
};

/** Pressed visual state — saturated amber bg. Toggle still works. */
export const Pressed = {
  render: ({ state, onChange }) => (
    <CheckboxToggle state={state} onChange={onChange} initialChecked={false} />
  ),
  args: { state: 'Pressed' },
  play: async ({ canvas, args }) => {
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).toHaveAttribute('data-state', 'pressed');
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');

    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
    await expect(args.onChange).toHaveBeenCalledOnce();
  },
};

/** Disabled — gray, no interaction, onChange never fires. */
export const Disabled = {
  args: { state: 'Disabled', checked: false },
  play: async ({ canvas, args }) => {
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).toHaveAttribute('aria-disabled', 'true');
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');

    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
    await expect(args.onChange).not.toHaveBeenCalled();
  },
};

/** Unchecked status — same visual as Default; click to check. */
export const Unchecked = {
  render: ({ state, onChange }) => (
    <CheckboxToggle state={state} onChange={onChange} initialChecked={false} />
  ),
  args: { state: 'Default' },
  play: async ({ canvas, args }) => {
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');

    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
    await expect(args.onChange).toHaveBeenCalledOnce();
  },
};

/** Checked — starts checked; click to uncheck. */
export const Checked = {
  render: ({ state, onChange }) => (
    <CheckboxToggle state={state} onChange={onChange} initialChecked={true} />
  ),
  args: { state: 'Default' },
  play: async ({ canvas, args }) => {
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');

    // click → unchecks
    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
    await expect(args.onChange).toHaveBeenCalledOnce();

    // click again → re-checks
    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
    await expect(args.onChange).toHaveBeenCalledTimes(2);
  },
};

/** Checked + hover state — darker amber, toggle works. */
export const CheckedHover = {
  render: ({ state, onChange }) => (
    <CheckboxToggle state={state} onChange={onChange} initialChecked={true} />
  ),
  args: { state: 'Hover' },
  play: async ({ canvas, args }) => {
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
    await expect(checkbox).toHaveAttribute('data-state', 'hover');

    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
    await expect(args.onChange).toHaveBeenCalledOnce();
  },
};

/** Checked + disabled — gray with muted checkmark, no interaction. */
export const CheckedDisabled = {
  args: { state: 'Disabled', checked: true },
  play: async ({ canvas, args }) => {
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
    await expect(checkbox).toHaveAttribute('aria-disabled', 'true');

    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
    await expect(args.onChange).not.toHaveBeenCalled();
  },
};
