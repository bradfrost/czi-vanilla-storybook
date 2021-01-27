import React from 'react';
import Heading from './Heading';

export default {
  title: 'Atoms/Text/Heading',
  component: Heading
};

const Template = args => <Heading {...args}>Heading</Heading>;

export const Heading1 = Template.bind({});
Heading1.args = { tagName: 'h1' };

export const Heading2 = Template.bind({});
Heading2.args = { tagName: 'h2' };

export const Heading3 = Template.bind({});
Heading3.args = { tagName: 'h3' };

export const Heading4 = Template.bind({});
Heading4.args = { tagName: 'h4' };

export const Heading5 = Template.bind({});
Heading5.args = { tagName: 'h5' };

export const Heading6 = Template.bind({});
Heading6.args = { tagName: 'h6' };

export const Heading2TypographyPreset1 = Template.bind({});
Heading2TypographyPreset1.args = { tagName: 'h2', size: 1 };

export const Heading2TypographyPreset2 = Template.bind({});
Heading2TypographyPreset2.args = { tagName: 'h2', size: 2 };

export const Heading2TypographyPreset3 = Template.bind({});
Heading2TypographyPreset3.args = { tagName: 'h2', size: 3 };

export const Heading2TypographyPreset4 = Template.bind({});
Heading2TypographyPreset4.args = { tagName: 'h2', size: 4 };

export const Heading2TypographyPreset5 = Template.bind({});
Heading2TypographyPreset5.args = { tagName: 'h2', size: 5 };

export const Heading2TypographyPreset6 = Template.bind({});
Heading2TypographyPreset6.args = { tagName: 'h2', size: 6 };

export const Heading2TypographyPreset7 = Template.bind({});
Heading2TypographyPreset7.args = { tagName: 'h2', size: 7 };

export const Heading2TypographyPreset8 = Template.bind({});
Heading2TypographyPreset8.args = { tagName: 'h2', size: 8 };
