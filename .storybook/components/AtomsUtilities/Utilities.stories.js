import React from 'react';
import { ColorUtilities } from './ColorUtilities';
import { ShadowUtilities } from './ShadowUtilities';
import { SpacingMarginUtilities } from './SpacingMarginUtilities';
import { SpacingPaddingUtilities } from './SpacingPaddingUtilities';
import { TypographyUtilities } from './TypographyUtilities';
import { VisibilityUtilities } from './VisibilityUtilities';

export default {
  component: ColorUtilities,
  title: 'Atoms/Utilities'
};

export const Color = () => <ColorUtilities />;
export const Shadow = () => <ShadowUtilities />;
export const SpacingMargin = () => <SpacingMarginUtilities />;
export const SpacingPadding = () => <SpacingPaddingUtilities />;
export const Typography = () => <TypographyUtilities />;
export const Visibility = () => <VisibilityUtilities />;
