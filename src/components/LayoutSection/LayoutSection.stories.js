import React from 'react';
import LayoutSection from './LayoutSection';

export default {
  title: 'Molecules/Layout and Containers/Layout Section',
  component: LayoutSection
};

const Template = args => (
  <LayoutSection {...args}>
    <div class="fpo">Layout Section</div>
  </LayoutSection>
);

export const Default = Template.bind({});
Default.args = {};
