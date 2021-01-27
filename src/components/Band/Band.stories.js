import React from 'react';
import Band from './Band';

export default {
  title: 'Molecules/Layout and Containers/Band',
  component: Band
};

export const Default = () => <Band>Hello world</Band>;
export const Branded = () => <Band variant="brand">Hello world</Band>;
