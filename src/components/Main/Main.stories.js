import React from 'react';
import Main from './Main';

export default {
  title: 'Molecules/Layout and Containers/Main',
  component: Main
};

const Template = args => (
  <Main {...args}>
    <div className="fpo">Main element</div>
  </Main>
);

export const Default = Template.bind({});
Default.args = {};
