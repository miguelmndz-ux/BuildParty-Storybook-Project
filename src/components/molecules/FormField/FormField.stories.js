import { fn } from 'storybook/test';
import { FormField } from './FormField';

/** @type {import('@storybook/react-vite').Meta<typeof FormField>} */
const meta = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
  args: {
    label: 'Session Name',
    placeholder: 'Launch Day',
    required: false,
    helper: 'Give your session a clear, descriptive name.',
    onChange: fn(),
  },
};

export default meta;

/** Labeled input with helper text and required indicator. */
export const Default = {};
