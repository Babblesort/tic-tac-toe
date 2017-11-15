import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import MoveLink from './MoveLink';

it('renders an li and button with go to move text when move is defined', () => {
  const move = 9
  const div = document.createElement('div');
  ReactDOM.render(<MoveLink move={move} />, div);
  const li = div.querySelector('li');
  const button = div.querySelector('li>button');
  expect(li).not.toBe(null);
  expect(button).not.toBe(null);
  expect(button.textContent).toBe(`Go to move #${move}`)
});

it('renders an li and button with go to start text when move is undefined', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoveLink />, div);
  const button = div.querySelector('button');
  expect(button.textContent).toBe(`Go to game start`)
});

it('calls click handler when button clicked', () => {
  const mockHandler = jest.fn();
  const div = document.createElement('div');
  ReactDOM.render(<MoveLink onClick={mockHandler} />, div);
  const button = div.querySelector('button');
  expect(mockHandler).not.toHaveBeenCalled();
  ReactTestUtils.Simulate.click(button);
  expect(mockHandler).toHaveBeenCalled();
});
