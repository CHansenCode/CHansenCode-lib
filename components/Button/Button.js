import React from 'react';

import css from './Button.module.scss';

export const Button = ({
  //content
  text,
  children,
  //square
  size,
  //sizing
  fontSize,
  padding,
  margin,
  //styling
  border,
  borderRadius,
  bgc,
  boxShadow,
  //template-stylings
  type,
  //html
  id,
  className,
  style,
  onClick,
  noClick,
}) => {
  const propStyle = {
    //adding 'size' prop prompts square shape
    height: size && size,
    width: size && size,

    //responsive sizing
    fontSize: fontSize,
    margin: margin,
    padding: padding,

    //propStyling
    border: border,
    borderRadius: borderRadius,
    backgroundColor: bgc,
    boxShadow: boxShadow,

    pointerEvents: noClick && 'none',
  };

  return (
    <button
      id={id}
      onClick={onClick}
      className={`${css.button} ${className} ${
        type === 'yellow'
          ? css.yellow
          : type === 'red'
          ? css.red
          : type === 'green'
          ? css.green
          : ''
      }`}
      style={{ ...propStyle, ...style }}
    >
      {children}
      {text}
      {!children && !text && 'text & children prop empty'}
    </button>
  );
};

Button.defaultProps = {
  fontSize: '16px',
};
