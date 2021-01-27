import React from 'react';
import Box from './Box';

export default {
  component: Box,
  title: 'Molecules/Blocks/Box'
};

const Template = args => (
  <Box {...args}>A Box is a generic bordered container for content.</Box>
);

export const Default = Template.bind();
Default.args = {};

export const Flush = Template.bind();
Flush.args = { styleModifier: 'flush' };

export const Centered = Template.bind();
Centered.args = { variant: 'center' };
