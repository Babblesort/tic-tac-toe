import React from 'react';
import Board from './Board';
import MoveLinks from './MoveLinks';

const initialSquares = [{ squares: Array(9).fill(null) }];
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: initialSquares,
      xIsNext: true,
      stepNumber: 0
    };
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const status = this.describeStatus(winner);

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleSquareClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <MoveLinks history={history} onClick={i => this.jumpTo(i)} />
        </div>
      </div>
    );
  }

  describeStatus(winner) {
    return winner
      ? `Winner: ${winner}`
      : `Next player: ${this.nextPlayerToken()}`;
  }

  nextPlayerToken() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  handleSquareClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.nextPlayerToken();
    this.setState({
      history: history.concat([{ squares }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  calculateWinner(squares) {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  jumpTo(stepNumber) {
    this.setState({
      stepNumber,
      xIsNext: stepNumber % 2 === 0
    });
  }
}

export default Game;
