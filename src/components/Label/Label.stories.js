import React from 'react';
import Label from './Label';
import Tooltip from '../Tooltip';

export default {
  title: 'Atoms/Forms/Label',
  component: Label
};

const Template = args => <Label {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Label', required: true };

export const Optional = Template.bind({});
Optional.args = { text: 'Label', required: false };

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  text: 'Label',
  required: true,
  labelAfter: (
    <Tooltip buttonText="Select this button to trigger the tooltip">
      Some text to help with a form field
    </Tooltip>
  )
};
