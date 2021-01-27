import React from 'react';
import Legend from './Legend';
import Tooltip from '../Tooltip';

export default {
  title: 'Atoms/Forms/Legend',
  component: Legend
};

const Template = args => <Legend {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Legend', required: true };

export const Optional = Template.bind({});
Optional.args = { text: 'Legend', required: false };

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  text: 'Legend',
  required: true,
  legendAfter: (
    <Tooltip buttonText="Select this button to trigger the tooltip">
      Some text to help with a form field
    </Tooltip>
  )
};
