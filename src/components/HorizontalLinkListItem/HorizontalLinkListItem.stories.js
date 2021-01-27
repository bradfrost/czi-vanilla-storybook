import React from 'react';
import HorizontalLinkListStories from '../HorizontalLinkList/HorizontalLinkList.stories';
import HorizontalLinkListItem from './HorizontalLinkListItem';

export default {
  title: 'Molecules/Lists-And-Collections/HorizontalLinkListItem',
  component: HorizontalLinkListItem
};

const Template = args => <HorizontalLinkListItem {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Horizontal Link List Item', href: '#' };
