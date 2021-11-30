import React from 'react';

import css from './Input.module.scss';

export const Input = ({
  //custom props
  label,
  info,

  //input html
  placeholder,
  name,
  value,
  required,

  //html
  id,
  className,
  style,

  //funcs
  onChange,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
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

        <input
          placeholder={placeholder}
          name={name}
          id={id}
          className={`${css.input} ${className}`}
          style={style}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onChange={onChange}
        />
      </div>
    </>
  );
};
