import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

test('Render App.tsx', () => {
  const app = shallow(<App />);

  expect(app.find('h1').text()).toEqual('Sushi PROJ');
});
