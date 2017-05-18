import React from 'react';
import App from '../js/index.js';

describe.only('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('has the correct class', () => {
    expect(wrapper.find('.app')).to.have.length(1);
  });
});
