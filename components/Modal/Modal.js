import React from 'react';

import { Button } from '../';

import css from './Modal.module.scss';

export const Modal = ({
  //propStyling
  center,
  column,

  //html defaults
  id,
  className,
  children,

  // open - close
  ternary,
  onClose,
}) => {
  const propStyle = {
    display: center && 'flex',
    relative: {
      display: center && 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: column && 'column',
    },
  };
  return (
    <>
      <div
        id={id}
        className={`${css.fixed} ${ternary ? css.open : null} ${className}`}
      >
        <div className={css.relative} style={{ ...propStyle.relative }}>
          {children}
          hello sadjka sj
          <div>onClose</div>
          <div className={css.closeButton}>
            <Button onClick={onClose}>X</Button>
          </div>
        </div>
      </div>
    </>
  );
};
