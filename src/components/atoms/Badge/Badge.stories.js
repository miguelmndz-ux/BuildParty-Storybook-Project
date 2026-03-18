import { Badge } from './Badge';

/** @type {import('@storybook/react-vite').Meta<typeof Badge>} */
const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline'],
      description: 'Visual variant of the badge',
      table: { defaultValue: { summary: 'primary' } },
    },
    label: {
      control: 'text',
      description: 'Badge label text',
      table: { defaultValue: { summary: 'Agents' } },
    },
  },
};

export default meta;

// CI test: triggering workflow via story comment update
/** Filled amber badge — action-subtle surface with amber border. */
export const Primary = {
  args: {
    label: 'Agents',
    variant: 'primary',
  },
};

/** White badge with subtle gray border — neutral/secondary style. */
export const Outline = {
  args: {
    label: 'Agents',
    variant: 'outline',
  },
};
