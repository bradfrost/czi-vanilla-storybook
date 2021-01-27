import React from 'react';
import Form from './Form';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

export default {
  title: 'Organisms/Forms/Form',
  component: Form
};

const Template = args => (
  <Form {...args}>
    <ButtonGroup>
      <Button variant="primary" text="Primary Button" />
      <Button text="Secondary Button" />
    </ButtonGroup>
  </Form>
);

export const Default = Template.bind({});
Default.args = {};
