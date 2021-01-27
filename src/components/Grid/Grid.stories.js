import React from 'react';
import Grid from './Grid';
import GridItem from '../GridItem';
import '../Utilities/Utilities.scss';

export default {
  title: 'Molecules/Layout and Containers/Layout Grid',
  component: Grid
};

const Template = args => (
  <Grid {...args}>
    <GridItem>
      <div className="fpo cn-u-margin-top-none cn-u-margin-bottom-none">
        Grid Item
      </div>
    </GridItem>
    <GridItem>
      <div className="fpo cn-u-margin-top-none cn-u-margin-bottom-none">
        Grid Item
      </div>
    </GridItem>
    <GridItem>
      <div className="fpo cn-u-margin-top-none cn-u-margin-bottom-none">
        Grid Item
      </div>
    </GridItem>
    <GridItem>
      <div className="fpo cn-u-margin-top-none cn-u-margin-bottom-none">
        Grid Item
      </div>
    </GridItem>
    <GridItem>
      <div className="fpo cn-u-margin-top-none cn-u-margin-bottom-none">
        Grid Item
      </div>
    </GridItem>
    <GridItem>
      <div className="fpo cn-u-margin-top-none cn-u-margin-bottom-none">
        Grid Item
      </div>
    </GridItem>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};

export const SideBySide = Template.bind({});
SideBySide.args = { variant: 'side-by-side' };

export const TwoUpGrid = Template.bind({});
TwoUpGrid.args = { variant: '2up' };

export const OneToThreeUpGrid = Template.bind({});
OneToThreeUpGrid.args = { variant: '1-to-3up' };

export const ThreeUpGrid = Template.bind({});
ThreeUpGrid.args = { variant: '3up' };

export const OneToTwoToFourUpGrid = Template.bind({});
OneToTwoToFourUpGrid.args = { variant: '1-2-4up' };

export const FourUpGrid = Template.bind({});
FourUpGrid.args = { variant: '4up' };

export const GridSpacingNone = Template.bind({});
GridSpacingNone.args = { variant: '2up', gap: 'none' };

export const GridSpacingSmall = Template.bind({});
GridSpacingSmall.args = { variant: '2up', gap: 'small' };

export const GridSpacingLarge = Template.bind({});
GridSpacingLarge.args = { variant: '2up', gap: 'large' };

export const GridSpacingXL = Template.bind({});
GridSpacingXL.args = { variant: '2up', gap: 'xl' };

export const GridRowSpacingNone = Template.bind({});
GridRowSpacingNone.args = { variant: '2up', rowGap: 'none' };

export const GridColumnSpacingNone = Template.bind({});
GridColumnSpacingNone.args = { variant: '2up', colGap: 'none' };
