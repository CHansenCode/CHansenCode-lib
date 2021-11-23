import React from 'react';

import css from './Form.module.scss';

export const Form = ({ title, children, color, onSubmit }) => {
  const propStyle = {
    color: color && color.primary,
  };
  return (
    <form
      onSubmit={e => e.preventDefault()}
      style={{ ...inline, ...propStyle }}
      className={css.form}
    >
      <h4 style={{ color: color && color.secondary }}>{title}</h4>
      {children}
    </form>
  );
};

const inline = {
  width: '640px',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(255,255,255,0.3)',
  padding: '1rem',
  border: 'thin solid',
};
