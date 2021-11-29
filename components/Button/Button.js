import React from 'react';

import css from './Button.module.scss';

export const Button = ({
  size,
  fontSize,

  padding,
  margin,

  color,
  border,
  borderRadius,
  bg,
  boxShadow,

  id,
  className,
  style,

  onClick,
  noClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,

  children,
}) => {
  const propStyle = {
    height: size && size,
    width: size && size,
    fontSize: fontSize,

    margin: margin,
    padding: padding,

    color: color,
    border: border,
    borderRadius: borderRadius,
    background: bg,
    boxShadow: boxShadow,

    pointerEvents: noClick && 'none',
  };

  return (
    <>
      <button
        id={id}
        onClick={onClick}
        className={`${css.button} ${className}`}
        style={{ ...propStyle, ...style }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children ? children : <b>childless</b>}
      </button>
    </>
  );
};
