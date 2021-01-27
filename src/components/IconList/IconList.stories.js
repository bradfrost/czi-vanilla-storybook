import React from 'react';
import IconList from './IconList';

export default {
  title: 'Molecules/Lists-And-Collections/IconList',
  component: IconList
};

const items = [
  { title: 'Top', iconName: 'caret-up' },
  { title: 'Right', iconName: 'caret-right' },
  { title: 'Down', iconName: 'caret-down' },
  { title: 'Left', iconName: 'caret-left' }
];

const Template = args => <IconList {...args} />;

export const Default = Template.bind({});
Default.args = { items: items };
