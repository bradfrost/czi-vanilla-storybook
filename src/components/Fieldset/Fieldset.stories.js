import React from 'react';
import Fieldset from './Fieldset';

export default {
  title: 'Organisms/Forms/Fieldset',
  component: Fieldset
};

const Template = args => <Fieldset {...args}>Children</Fieldset>;

export const Default = Template.bind({});
Default.args = { legend: 'Fieldset Legend' };
