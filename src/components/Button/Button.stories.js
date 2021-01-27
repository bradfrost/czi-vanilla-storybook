import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Molecules/Buttons/Button'
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Button' };

export const DefaultWithIconBefore = Template.bind({});
DefaultWithIconBefore.args = {
  text: 'Button',
  iconPosition: 'before',
  iconName: 'caret-left'
};

export const DefaultWithIconAfter = Template.bind({});
DefaultWithIconAfter.args = {
  text: 'Button',
  iconPosition: 'after',
  iconName: 'caret-right'
};

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', text: 'Primary Button' };

export const Tertiary = Template.bind({});
Tertiary.args = { variant: 'tertiary', text: 'Tertiary Button' };

export const Ghost = () => (
  <div className="cn-u-padding-large" style={{ background: '#000000' }}>
    <Button
      variant="ghost"
      text="Ghost button"
      screenReaderText="for screenreaders"
    />
  </div>
);

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, text: 'Disabled Button' };

export const BareIcon = Template.bind({});
BareIcon.args = {
  variant: 'bare',
  text: 'Close',
  iconName: 'x',
  iconPosition: 'before',
  hideText: true
};

export const TextLinkButton = Template.bind({});
TextLinkButton.args = { variant: 'link', text: 'Text Link Button' };

export const TextLinkWithIcon = Template.bind({});
TextLinkWithIcon.args = {
  variant: 'link',
  text: 'Text Link Button',
  iconPosition: 'after',
  iconName: 'triangle-right'
};

export const Large = Template.bind({});
Large.args = { size: 'large', text: 'Large Button' };

export const Small = Template.bind({});
Small.args = { size: 'small', text: 'Small Button' };

export const Tiny = Template.bind({});
Tiny.args = { size: 'tiny', text: 'Tiny Button' };

export const Loading = Template.bind({});
Loading.args = { loading: true, text: 'Loading...' };

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = { variant: 'primary', loading: true, text: 'Loading...' };
