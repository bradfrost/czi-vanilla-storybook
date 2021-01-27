import React from 'react';
import TextLink from './TextLink';

export default {
  title: 'Atoms/Text/TextLink',
  component: TextLink
};

const Template = args => <TextLink {...args}>Text link</TextLink>;

export const Default = Template.bind({});
Default.args = { href: '#' };

export const Bold = Template.bind({});
Bold.args = { variant: 'bold', href: '#' };

export const Inverted = () => (
  <div className="cn-u-padding-large" style={{ background: '#000000' }}>
    <TextLink theme="inverted" href="#">
      Text Link
    </TextLink>
  </div>
);
