import React from 'react';

import css from './List.module.scss';

export const List = ({ margin, padding, className, children, horizontal }) => {
  const propStyle = {
    display: horizontal && 'flex',
    margin: margin,
    padding: padding,
  };

  return (
    <ul
      className={`${css.list} ${className}`}
      style={({ ...inline }, { ...propStyle })}
    >
      {children}
    </ul>
  );
};

const inline = {
  width: 'min-content',
};
