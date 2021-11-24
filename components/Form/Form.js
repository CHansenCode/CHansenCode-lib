import React from 'react';

import css from './Form.module.scss';

export const Form = ({
  id,
  className,
  style,

  margin,
  padding,

  border,
  bg,

  children,
  onSubmit,
}) => {
  const propStyle = {
    background: bg,
    padding: padding,
    margin: margin,
    border: border,
  };
  return (
    <form
      id={id}
      onSubmit={onSubmit ? onSubmit : e => e.preventDefault()}
      style={{ ...propStyle, ...style }}
      className={`${css.form} ${className}`}
    >
      {children}
    </form>
  );
};
