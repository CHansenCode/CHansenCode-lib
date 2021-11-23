import React from 'react';

export const Hamburger = ({ ternary, size, id, className, onClick }) => {
  const propStyle = {
    wrapper: {
      height: size,
      width: size,
    },
    topBun: {
      top: ternary ? '45%' : '20%',
      transform: ternary ? 'rotate(45deg)' : 'rotate(0deg)',
    },
    meat: {
      transform: 'translate(0)',
      transform: ternary ? 'rotate(-45deg)' : 'rotate(0deg)',
    },
    botBun: {
      top: ternary ? '120%' : '70%',
      transform: ternary ? 'rotate(45deg)' : 'rotate(0deg)',
      opacity: ternary ? '0' : '1',
    },
  };
  return (
    <div
      id={id}
      className={className}
      style={{ ...propStyle.wrapper, ...inline.wrapper }}
      onClick={onClick}
    >
      <span style={{ ...propStyle.topBun, ...inline.span, ...inline.topBun }} />
      <span style={{ ...propStyle.meat, ...inline.span, ...inline.meat }} />
      <span style={{ ...propStyle.botBun, ...inline.span, ...inline.botBun }} />
    </div>
  );
};

const inline = {
  wrapper: {
    position: 'relative',
    border: 'thin solid',
    transition: '0.5s ease',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  span: {
    position: 'absolute',
    width: '80%',
    height: '10%',
    minHeight: '5px',
    border: 'thin solid',
    borderRadius: '10%',
    transition: '0.5s ease',
  },
  topBun: {
    left: '10%',
  },
  meat: {
    top: '45%',
    left: '10%',
  },
  botBun: {
    left: '10%',
  },
};

Hamburger.defaultProps = {
  size: '2rem',
};
