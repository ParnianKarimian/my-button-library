import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryLarge: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'large',
  },
};

export const SecondarySmall: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'small',
  },
};
