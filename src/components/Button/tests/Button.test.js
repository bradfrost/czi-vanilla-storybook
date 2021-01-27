import React from 'react';
import { render } from 'enzyme';
import Button from '../Button';

it('renders a button', () => {
  const wrapper = render(<Button text="Click" />);
  expect(wrapper).toMatchSnapshot();
});

it('renders a link', () => {
  const wrapper = render(<Button text="Click" href="http://test.com" />);
  expect(wrapper).toMatchSnapshot();
});

it('handles variants', () => {
  const variants = [
    'primary',
    'secondary',
    'tertiary',
    'bare',
    'link',
    'link-inverted',
    'ghost'
  ];

  variants.forEach(variant => {
    const wrapper = render(<Button text="Click" variant={variant} />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('handles sizes', () => {
  const sizes = ['large', 'small', 'tiny'];

  sizes.forEach(size => {
    const wrapper = render(<Button text="Click" size={size} />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('handles types', () => {
  const types = ['button', 'reset', 'submit'];

  types.forEach(type => {
    const wrapper = render(<Button text="Click" type={type} />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('can be inverted', () => {
  const wrapper = render(<Button text="Click" theme="inverted" />);
  expect(wrapper).toMatchSnapshot();
});

it('can be full width', () => {
  const wrapper = render(<Button text="Click" fullWidth />);
  expect(wrapper).toMatchSnapshot();
});

it('can be disabled', () => {
  const wrapper = render(<Button text="Click" disabled />);
  expect(wrapper).toMatchSnapshot();
});

it('can hide text', () => {
  const wrapper = render(<Button text="Click" hideText />);
  expect(wrapper).toMatchSnapshot();
});

it('can display loading', () => {
  const wrapper = render(<Button text="Click" loading />);
  expect(wrapper).toMatchSnapshot();
});

it('renders screen reader text', () => {
  const wrapper = render(<Button text="Click" screenReaderText="test" />);
  expect(wrapper).toMatchSnapshot();
});

it('renders icons', () => {
  const before = render(
    <Button text="Click" iconPosition="before" iconName="activity" />
  );
  expect(before).toMatchSnapshot();

  const after = render(
    <Button text="Click" iconPosition="after" iconName="activity" />
  );
  expect(after).toMatchSnapshot();
});
