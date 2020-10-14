import React from 'react';
import '@testing-library/jest-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App test', () => {
  
  test('renders App', () => {

    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  });
})
