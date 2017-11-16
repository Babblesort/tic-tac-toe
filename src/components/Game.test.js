import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Game from './Game';

let div;
let game;
beforeEach(() => {
  div = document.createElement('div');
  game = ReactDOM.render(<Game />, div);
});

it('creates initial state in ctor', () => {
  expect(game.state).not.toBeFalsy;
  expect(game.state.history).toEqual([{ squares: Array(9).fill(null) }]);
  expect(game.state.xIsNext).toBe(true);
  expect(game.state.stepNumber).toBe(0);
});

it('provides description of game status', () => {
  game.nextPlayerToken = () => 'Z';
  expect(game.describeStatus()).toBe('Next player: Z');
  expect(game.describeStatus(null)).toBe('Next player: Z');
  expect(game.describeStatus(false)).toBe('Next player: Z');

  expect(game.describeStatus(true)).toBe(`Winner: ${true}`);
  expect(game.describeStatus(1)).toBe(`Winner: 1`);
  expect(game.describeStatus('a')).toBe(`Winner: a`);
});

it('provides next player token based on xIsNext state', () => {
  expect(game.nextPlayerToken()).toBe('X');
  game.state.xIsNext = 1;
  expect(game.nextPlayerToken()).toBe('X');
  game.state.xIsNext = 'a';
  expect(game.nextPlayerToken()).toBe('X');

  game.state.xIsNext = false;
  expect(game.nextPlayerToken()).toBe('O');
  game.state.xIsNext = null;
  expect(game.nextPlayerToken()).toBe('O');
  game.state.xIsNext = undefined;
  expect(game.nextPlayerToken()).toBe('O');
});
