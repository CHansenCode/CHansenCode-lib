import React from 'react';
import { useState } from 'react';

export const Dropdown = ({ placeholder, children }) => {
  let open = false;
  async function onMouseEnter() {
    return (open = true);
  }
  async function onMouseLeave() {
    return (open = false);
  }
  return (
    <>
      <div
        className="ch_dropdown"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <MenuItem placeholder={placeholder} open={open} />

        <ul className="ch_dropdown_ul">
          {children && children > 1
            ? children.map((child, i) => (
                <li className="ch_dropdown_li" key={`${i}dropdown`}>
                  {child}
                </li>
              ))
            : children}
        </ul>
      </div>

      <style jsx>
        {`
          .ch_dropdown {
            height: min-content;

            border: thin solid;
            padding: 0 0.5rem;
          }
          .ch_dropdown:hover {
            color: red;
            cursor: pointer;
          }
          .ch_dropdown_ul {
            position: absolute;
            top: 100%;
            left: 0;

            width: 100%;
            cursor: pointer;
            overflow: hidden;
            transition: 0.3s ease;
          }
          .ch_dropdown_li {
          }
        `}
      </style>
    </>
  );
};

const MenuItem = ({ placeholder, open }) => {
  return (
    <>
      <div className="ch_dropdown_menuItem">
        {placeholder ? placeholder : 'placeholder'} <span>^</span>
      </div>
      <style jsx>
        {`
          .ch_dropdown_menuItem {
            color: red;
          }
          .ch_dropdown_menuItem span {
            color: ${open ? 'blue' : 'green'};
            font-size: ${open ? '20px' : '10px'};
          }
        `}
      </style>
    </>
  );
};

const inline = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    width: 'min-content',
    border: 'thin solid',
  },
  menuButton: {
    height: '100%',
    width: '100%',

    padding: '0 1rem',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontWeight: 501,
  },
  list: {
    position: 'absolute',
    top: '100%',
    left: '0',

    width: '100%',

    cursor: 'pointer',

    overflow: 'hidden',
    transition: '0.3s ease',
  },
  item: {
    padding: '0 1rem',
  },
  arrow: {
    marginLeft: '0.5rem',
    transform: 'rotate(180deg)',
  },
};
