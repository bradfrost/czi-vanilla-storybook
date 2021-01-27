import React from 'react';
import LayoutSidebar from './LayoutSidebar';
import LayoutSection from '../LayoutSection';
import '../Utilities/Utilities.scss';

export default {
  title: 'Molecules/Layout and Containers/Layout Sidebar',
  component: LayoutSidebar
};

let fixedSidebarStyle = {
  height: '300px',
  overflow: 'auto'
};

let fixedSidebarMainStyle = {
  height: '600px'
};

const Template = args => (
  <LayoutSidebar {...args}>
    <LayoutSection area="sidebar">
      <div className="fpo cn-u-margin-top-none cn-u-margin-bottom-none">
        This is the sidebar content
      </div>
    </LayoutSection>
    <LayoutSection area="main">
      <div className="fpo cn-u-margin-top-none cn-u-margin-bottom-none">
        This is the main content
      </div>
    </LayoutSection>
  </LayoutSidebar>
);

export const Default = Template.bind({});
Default.args = {};

export const Reversed = Template.bind({});
Reversed.args = { variant: 'reversed' };

export const Fixed = () => (
  <LayoutSidebar style={fixedSidebarStyle} position="fixed">
    <LayoutSection area="sidebar">
      <div className="fpo cn-u-margin-top-none cn-u-margin-bottom-none">
        This is the sidebar content
      </div>
    </LayoutSection>
    <LayoutSection area="main">
      <div
        style={fixedSidebarMainStyle}
        className="fpo cn-u-margin-top-none cn-u-margin-bottom-none"
      >
        This is the main content
      </div>
    </LayoutSection>
  </LayoutSidebar>
);

export const NarrowSidebar = Template.bind({});
NarrowSidebar.args = { size: 'narrow' };
