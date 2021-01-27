import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button';

export default {
  component: ButtonGroup,
  title: 'Organisms/Buttons/ButtonGroup'
};

const Template = args => (
  <ButtonGroup {...args}>
    <Button variant="primary" text="Primary Button" />
    <Button text="Secondary Button" />
  </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {};

export const WithTextButton = () => (
  <ButtonGroup>
    <Button variant="primary" text="Primary Button" />
    <Button text="Go Back" variant="link" />
  </ButtonGroup>
);

export const Responsive = Template.bind({});
Responsive.args = { behavior: 'responsive' };

export const Stacked = Template.bind({});
Stacked.args = { behavior: 'stacked' };
