import React from 'react';
import HorizontalLinkList from './HorizontalLinkList';
import HorizontalLinkListItem from '../HorizontalLinkListItem';

export default {
  title: 'Molecules/Lists-And-Collections/HorizontalLinkList',
  component: HorizontalLinkList
};

const items = [
  { text: 'Link List Item 1', href: '#' },
  { text: 'Link List Item 2', href: '#' },
  { text: 'Link List Item 3', href: '#' }
];

const Template = args => <HorizontalLinkList {...args} />;

export const Default = Template.bind({});
Default.args = { items: items };

export const DefaultUsingChildren = () => (
  <HorizontalLinkList>
    <HorizontalLinkListItem text="Link List Item 1" href="#" />
    <HorizontalLinkListItem text="Link List Item 2" href="#" />
    <HorizontalLinkListItem text="Link List Item 3" href="#" />
  </HorizontalLinkList>
);

export const Small = Template.bind({});
Small.args = { items: items, size: 'small' };

export const WithIcon = Template.bind({});
WithIcon.args = {
  items: [
    {
      text: 'Link List Item 1',
      href: '#',
      iconName: 'plus'
    },
    { text: 'Link List Item 2', href: '#', iconName: 'plus' },
    { text: 'Link List Item 3', href: '#', iconName: 'plus' }
  ]
};

export const DefaultUsingChildrenWithMetaData = () => (
  <HorizontalLinkList>
    <HorizontalLinkListItem
      text="Link List Item 1"
      meta="(meta data)"
      href="#"
    />
    <HorizontalLinkListItem
      text="Link List Item 2"
      meta="(meta data)"
      href="#"
    />
    <HorizontalLinkListItem
      text="Link List Item 3"
      meta="(meta data)"
      href="#"
    />
  </HorizontalLinkList>
);
