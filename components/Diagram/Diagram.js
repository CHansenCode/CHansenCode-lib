import React, { useRef, useEffect } from 'react';

import css from './Diagram.module.scss';

export const Diagram = ({ size, factor, strokeWidth }) => {
  const myRef = useRef(null);

  let height = 300;
  let width = 300;
  let midPoint = 150;
  let radius = midPoint - (strokeWidth + 1);

  let strokeDasharray = radius * 2 * Math.PI;

  const propStyles = {
    height: size && '2rem',
    width: size && '2rem',
    border: 'thin solid',
    overflow: 'hidden',
  };

  return (
    <div
      style={propStyles}
      className={css.wrapper}
      style={{ height: size, width: size }}
    >
      <svg
        height="100%"
        width="100%"
        className={`sc ${css.circle}`}
        viewBox={`0 0 ${height + 1} ${width + 1}`}
      >
        <circle
          className="sc"
          ref={myRef}
          cx={midPoint}
          cy={midPoint}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDasharray * factor}
          fill="transparent"
        />
      </svg>
    </div>
  );
};
