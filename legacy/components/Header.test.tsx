import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';

test('Header isn\'t borked', () => {
  const component = renderer.create(
    <Header />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Name doesn\'t show when hidden', () => {
  const component = renderer.create(
    <Header hideName />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
