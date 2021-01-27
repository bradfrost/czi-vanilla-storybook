import React from 'react';
import GridItem from './GridItem';

export default {
  title: 'Molecules/Layout and Containers/Layout Grid Item',
  component: GridItem
};

const Template = args => (
  <GridItem {...args}>
    <div className="fpo cn-u-margin-top-none cn-u-margin-bottom-none">
      Grid item
    </div>
  </GridItem>
);

export const Default = Template.bind({});
Default.args = {};
