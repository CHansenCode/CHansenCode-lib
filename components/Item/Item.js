import React from 'react';

import css from './Item.module.scss';

export const Item = ({ id, className, style, children, onClick }) => {
  return (
    <li
      style={{ ...style }}
      id={id}
      className={`${css.item} ${className}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
