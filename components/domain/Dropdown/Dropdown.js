import React from 'react';
import { useState } from 'react';

import css from './Dropdown.module.scss';

export const Dropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${css.dropdown}`}>
        <MenuItem
          placeholder={title}
          open={open}
          onMouseEnter={() => setOpen(true)}
          onClick={() => setOpen(!open)}
        />

        <ul
          className={`pc3b bg ${css.dropdown_list} ${
            open && css.dropdown_list_open
          }`}
          onMouseLeave={() => setOpen(false)}
        >
          {children && children > 1
            ? children.map((child, i) => <li key={`${i}dropdown`}>{child}</li>)
            : children}
        </ul>
      </div>
    </>
  );
};

const MenuItem = ({ placeholder, open, onClick, onMouseEnter }) => {
  return (
    <div
      className={`${css.menuitem} ${open && css.menuitem_open}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {placeholder ? placeholder : 'placeholder'}
      <div>{`^`}</div>
    </div>
  );
};
