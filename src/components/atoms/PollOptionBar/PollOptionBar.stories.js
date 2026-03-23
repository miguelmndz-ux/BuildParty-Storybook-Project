import { expect } from 'storybook/test';
import { PollOptionBar } from './PollOptionBar';

/** @type {import('@storybook/react-vite').Meta<typeof PollOptionBar>} */
const meta = {
  title: 'Atoms/PollOptionBar',
  component: PollOptionBar,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Voted', 'ResultsOnly'],
      description: 'Visual state — controls fill bar and color scheme',
      table: { defaultValue: { summary: 'Default' } },
    },
    label: {
      control: 'text',
      description: 'Option label text',
    },
    percentage: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Vote percentage (0–100) — controls fill bar width',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show crown icon next to label',
      table: { defaultValue: { summary: true } },
    },
    showPercentage: {
      control: 'boolean',
      description: 'Show percentage value on the right',
      table: { defaultValue: { summary: true } },
    },
  },
};
export default meta;

/** No fill bar — pre-vote state where results are not yet visible. */
export const Default = {
  args: {
    state: 'Default',
    label: 'LiveKit Agents',
    percentage: 42,
    showIcon: true,
    showPercentage: true,
  },
  play: async ({ canvas }) => {
    expect(canvas.getByText('LiveKit Agents')).toBeInTheDocument();
    expect(canvas.getByText('42%')).toBeInTheDocument();
  },
};

/** Amber fill bar — marks the option the current user voted for. */
export const Voted = {
  args: {
    state: 'Voted',
    label: 'LiveKit Agents',
    percentage: 42,
    showIcon: true,
    showPercentage: true,
  },
  play: async ({ canvas }) => {
    const bar = canvas.getByText('LiveKit Agents').closest('.poll-option-bar');
    expect(bar).toHaveClass('poll-option-bar--voted');
    expect(canvas.getByText('42%')).toBeInTheDocument();
  },
};

/** Gray fill bar — shows other options' results after the user has voted. */
export const ResultsOnly = {
  args: {
    state: 'ResultsOnly',
    label: 'LiveKit Agents',
    percentage: 42,
    showIcon: true,
    showPercentage: true,
  },
  play: async ({ canvas }) => {
    const bar = canvas.getByText('LiveKit Agents').closest('.poll-option-bar');
    expect(bar).toHaveClass('poll-option-bar--results-only');
    expect(canvas.getByText('42%')).toBeInTheDocument();
  },
};
