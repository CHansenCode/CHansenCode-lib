import React from 'react';

import css from './Textarea.module.scss';

export const Textarea = ({
  //custom props
  label,
  info,

  //input html
  placeholder,
  name,
  value,
  required,
  rows,

  //html
  id,
  className,
  style,

  //funcs
  onChange,
}) => {
  return (
    <>
      <div className={css.wrapper}>
        <header className={css.header}>
          <label>
            {required && <span className="sc">* </span>}
            {label && `${label} :`}
          </label>

          {info && (
            <h6 className={css.info}>
              i<span>{info}</span>
            </h6>
          )}
        </header>

        <textarea
          placeholder={placeholder}
          name={name}
          id={id}
          className={`${css.textarea} ${className}`}
          style={style}
          value={value}
          rows={rows}
          onChange={onChange}
        ></textarea>
      </div>
    </>
  );
};

Textarea.defaultProps = {
  rows: '4',
};
