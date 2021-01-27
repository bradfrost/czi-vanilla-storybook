import React from 'react';
import LoadingIndicator from './LoadingIndicator';

export default {
  title: 'Atoms/Icons/LoadingIndicator',
  component: LoadingIndicator
};

const Template = args => <LoadingIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {};
