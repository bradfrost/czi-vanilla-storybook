import React from 'react';
import TextList from './TextList';
import TextListItem from '../TextListItem';
import IconList from '../IconList';

export default {
  title: 'Molecules/Lists-And-Collections/TextList',
  component: TextList
};

const Template = args => (
  <TextList {...args}>
    <TextListItem>Text list item 1</TextListItem>
    <TextListItem>Text list item 2</TextListItem>
    <TextListItem>Text list item 3</TextListItem>
    <TextListItem>Text list item 4</TextListItem>
  </TextList>
);

export const Default = Template.bind({});
Default.args = {};

export const WithIconList = () => (
  <TextList>
    <TextListItem>Text list item 1</TextListItem>
    <TextListItem>Text list item 2</TextListItem>
    <TextListItem>
      Text list item 3{' '}
      <IconList
        items={[
          { title: 'Up', iconName: 'caret-up' },
          { title: 'Right', iconName: 'caret-right' },
          { title: 'Down', iconName: 'caret-down' }
        ]}
      />
    </TextListItem>
    <TextListItem>Text list item 4</TextListItem>
  </TextList>
);

export const Inline = Template.bind({});
Inline.args = { variant: 'inline' };

export const Inverted = () => (
  <div className="cn-u-padding-large" style={{ background: '#000000' }}>
    <TextList theme="inverted">
      <TextListItem>Text list item 1</TextListItem>
      <TextListItem>Text list item 2</TextListItem>
      <TextListItem>Text list item 3</TextListItem>
      <TextListItem>Text list item 4</TextListItem>
    </TextList>
  </div>
);

export const OrderedList = Template.bind({});
OrderedList.args = { listTag: 'ol' };

export const Small = Template.bind({});
Small.args = { size: 'small' };

export const Tiny = Template.bind({});
Tiny.args = { size: 'tiny' };
