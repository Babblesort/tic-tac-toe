import React from 'react';
import Square from './Square';

const Board = props => {
  const indexedProps = props.squares.map((val, i) => ({
    val,
    fn: () => props.onClick(i)
  }));

  return (
    <div>
      <div className="board-row">
        <Square value={indexedProps[0].val} onClick={indexedProps[0].fn} />
        <Square value={indexedProps[1].val} onClick={indexedProps[1].fn} />
        <Square value={indexedProps[2].val} onClick={indexedProps[2].fn} />
      </div>
      <div className="board-row">
        <Square value={indexedProps[3].val} onClick={indexedProps[3].fn} />
        <Square value={indexedProps[4].val} onClick={indexedProps[4].fn} />
        <Square value={indexedProps[5].val} onClick={indexedProps[5].fn} />
      </div>
      <div className="board-row">
        <Square value={indexedProps[6].val} onClick={indexedProps[6].fn} />
        <Square value={indexedProps[7].val} onClick={indexedProps[7].fn} />
        <Square value={indexedProps[8].val} onClick={indexedProps[8].fn} />
      </div>
    </div>
  );
};

export default Board;
