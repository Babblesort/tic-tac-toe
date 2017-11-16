import React from 'react';
import Square from './Square';

const Board = props => {
  const indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const indexedProps = indexes.map(i => ({
    value: props.squares[i],
    handler: () => props.onClick(i)
  }));
  return (
    <div>
      <div className="board-row">
        <Square value={indexedProps[0].value} onClick={indexedProps[0].handler} />
        <Square value={indexedProps[1].value} onClick={indexedProps[1].handler} />
        <Square value={indexedProps[2].value} onClick={indexedProps[2].handler} />
      </div>
      <div className="board-row">
        <Square value={indexedProps[3].value} onClick={indexedProps[3].handler} />
        <Square value={indexedProps[4].value} onClick={indexedProps[4].handler} />
        <Square value={indexedProps[5].value} onClick={indexedProps[5].handler} />
      </div>
      <div className="board-row">
        <Square value={indexedProps[6].value} onClick={indexedProps[6].handler} />
        <Square value={indexedProps[7].value} onClick={indexedProps[7].handler} />
        <Square value={indexedProps[8].value} onClick={indexedProps[8].handler} />
      </div>
    </div>
  );
};

export default Board;
