import React from 'react';

import { Month, Week, Day } from './types';

import css from './Icon.module.scss';

export const Icon = ({ size, type, title }) => {
  switch (type) {
    case 'month':
      return (
        <SVG size={size} title="month">
          <Month />
        </SVG>
      );
    case 'week':
      return (
        <SVG size={size} title="week">
          <Week />
        </SVG>
      );
    case 'day':
      return (
        <SVG size={size} title="day">
          <Day />
        </SVG>
      );

    default:
      return <SVG size={size} title="No type given"></SVG>;
  }
};

const SVG = ({ size, title, children }) => {
  return (
    <svg
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={css.svg}
    >
      <title>{title}</title>

      {children}
    </svg>
  );
};
