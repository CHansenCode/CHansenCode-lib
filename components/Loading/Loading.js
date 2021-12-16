import React from 'react';

import css from './Loading.module.scss';

export const Loading = ({ text, type }) => {
  switch (type) {
    case 'dotted':
      return <Dotted text={text} />;
    case 'circular':
      return <Circular text={text} />;
    default:
      return <Dotted />;
  }
};

const Dotted = ({ text }) => {
  return (
    <div className={css.loadingContainer}>
      <h3 className={css.text}>{text ? text : 'loading'}</h3>

      <h5 className={css.dotOne}>o</h5>
      <h5 className={css.dotTwo}>o</h5>
      <h5 className={css.dotThree}>o</h5>
      <h5 className={css.dotFour}>o</h5>
    </div>
  );
};

const Circular = () => {
  return (
    <div>
      <h5>i am circle</h5>
    </div>
  );
};
