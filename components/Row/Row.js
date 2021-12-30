import React from 'react';

export const Row = ({ gap, children }) => {
  const propStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${
      children && children.length && children.length
    }, min-content)`,
    gap: gap ? gap : '0.5rem',
  };
  return <div style={propStyle}>{children}</div>;
};
