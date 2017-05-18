import 'jsdom-global/register';
import jsdom from 'jsdom';
import { expect } from 'chai';
import sinon, { spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';
import 'isomorphic-fetch';

global.expect = expect;
global.sinon = sinon;
global.spy = spy;

global.mount = mount;
global.render = render;
global.shallow = shallow;

// global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

export {
  expect,
  sinon,
  mount,
  shallow
 };
