import React from 'react';
import MoveLink from './MoveLink';

const MoveLinks = props => {
  const moves = props.history.map((step, index) => {
    return <MoveLink key={index} move={index} onClick={() => props.onClick(index)} />;
  });
  return <ol>{moves}</ol>;
};

export default MoveLinks;
