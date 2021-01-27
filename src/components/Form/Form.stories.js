import React from 'react';
import Form from './Form';
import TextField from '../TextField';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

export default {
  title: 'Organisms/Forms/Form',
  component: Form
};

const Template = args => (
  <Form {...args}>
    <TextField
      label="Field 1"
      id="text-field-1"
      required
      fieldNote="What's this?"
    />
    <TextField label="Field 2" id="text-field-2" required />
    <ButtonGroup>
      <Button variant="primary" text="Primary Button" />
      <Button text="Secondary Button" />
    </ButtonGroup>
  </Form>
);

export const Default = Template.bind({});
Default.args = {};
