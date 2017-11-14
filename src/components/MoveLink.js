import React from 'react';

const MoveLink = props => {
  const desc = props.move ? `Go to move #${props.move}` : 'Go to game start';
  return (
    <li key={props.move}>
      <button onClick={props.onClick}>{desc}</button>
    </li>
  );
};

export default MoveLink;
