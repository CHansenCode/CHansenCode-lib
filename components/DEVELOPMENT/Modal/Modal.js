import React from 'react';

import { Button } from '../..';

import css from './Modal.module.scss';

export const Modal = ({
  center,
  column,
  ternary,

  id,
  className,
  children,

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
        className={`pcbg ${css.fixed} ${ternary && css.open} ${className}`}
      >
        <div className={css.relative}>
          {children}
          <Button className={css.closeButton} onClick={onClose}>
            X
          </Button>
        </div>
      </div>
    </>
  );
};
