import React from 'react';

import css from './List.module.scss';

export const List = ({ align, id, className, style, children }) => {
  const propStyle = {
    alignItems:
      align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : '',
  };
  return (
    <ul id={id} className={`${css.ul} ${className}`} style={{ ...style }}>
      {children}
    </ul>
  );
};
