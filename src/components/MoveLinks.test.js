import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import MoveLinks from './MoveLinks';

it('renders an ordered list of MoveLinks, one per history object', () => {
  const history = [0, 1];
  const div = document.createElement('div');
  ReactDOM.render(<MoveLinks history={history} />, div);
  const ol = div.querySelector('ol');
  expect(ol).not.toBe(null);

  const liSet = div.querySelectorAll('li');
  expect(liSet.length).toBe(history.length);
});

it('renders an empty ordered list when history is undefined', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoveLinks />, div);
  const ol = div.querySelector('ol');
  expect(ol).not.toBe(null);

  const liSet = div.querySelectorAll('li');
  expect(liSet.length).toBe(0);
});

it('hands down click handler to MoveLink with history index as param', () => {
  const history = ['a', 'b'];
  const mockHandler = jest.fn();
  const div = document.createElement('div');
  ReactDOM.render(<MoveLinks history={history} onClick={mockHandler}/>, div);
  const moveLinkButtons = div.querySelectorAll('ol button');
  expect(moveLinkButtons.length).toBe(history.length);

  ReactTestUtils.Simulate.click(moveLinkButtons[1]);
  expect(mockHandler.mock.calls[0]).toEqual([1]);
  ReactTestUtils.Simulate.click(moveLinkButtons[0]);
  expect(mockHandler.mock.calls[1]).toEqual([0]);
});
