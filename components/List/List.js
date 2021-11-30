import React from 'react';

import css from './List.module.scss';

export const List = ({ align, id, className, style, children, ...props }) => {
  return (
    <ul id={id} className={`${css.ul} ${className}`} style={{ ...style }}>
      {children}
    </ul>
  );
};
