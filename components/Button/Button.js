import React from 'react';

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
        className={`ch_lib_button ${className}`}
        style={{ ...propStyle, ...style }}
      >
        {children ? children : <b>childless</b>}
      </button>

      <style jsx>
        {`
          .ch_lib_button {
            display: flex;
            align-items: center;
            justify-content: center;

            margin: 0;
            padding: 0.5rem 1rem;

            color: currentColor;
            background: transparent;
            border: thin solid currentColor;
            border-radius: 0.25rem;
            outline: thin solid transparent;

            box-shadow: inset 0 0 0 0 currentColor, 0 0 0 0 currentColor;

            transition: 0.3s ease;
          }
          .ch_lib_button:hover {
            cursor: pointer;
            box-shadow: inset 0 0 2rem -1.2rem, 0 0 2rem -1.5rem currentColor;
          }
          .ch_lib_button:focus {
            outline: thin solid currentColor;
          }
        `}
      </style>
    </>
  );
};
