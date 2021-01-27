import React from 'react';
import Tooltip from './Tooltip';
import '../Utilities/Utilities.scss';

export default {
  title: 'Molecules/Messaging/Tooltip',
  component: Tooltip
};

const Template = args => (
  <Tooltip {...args}>
    <p>Hello, I am a tooltip</p>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = { buttonText: 'Click on this to get more information' };

export const Right = Template.bind({});
Right.args = {
  align: 'right',
  buttonText: 'Click on this to get more information'
};

export const Below = Template.bind({});
Below.args = {
  align: 'below',
  buttonText: 'Click on this to get more information'
};

export const Left = Template.bind({});
Left.args = {
  align: 'left',
  buttonText: 'Click on this to get more information'
};
