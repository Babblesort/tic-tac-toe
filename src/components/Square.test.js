import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Square from './Square';

let div;
let button;
const mockHandler = jest.fn();

beforeEach(() => {
  div = document.createElement('div');
  ReactDOM.render(<Square value={'texty'} onClick={mockHandler}/>, div);
  button = div.querySelector('button.square');
});

it('renders a button with expected class', () => {
  expect(button).not.toBe(null);
});

it('button text comes from props', () => {
  expect(button.textContent).toBe('texty');
});

it('calls passed function on click', () => {
  expect(mockHandler).not.toHaveBeenCalled();
  ReactTestUtils.Simulate.click(button);
  expect(mockHandler).toHaveBeenCalled();
});
