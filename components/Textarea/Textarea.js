import React from 'react';

export const Textarea = ({
  label,
  placeholder,
  info,
  name,
  id,
  className,
  style,
  rows,
  value,
  onChange,
  required,
}) => {
  return (
    <>
      <div className="ch_lib_textarea_wrapper">
        <header>
          {label && (
            <label>
              {required && <span className="sc">* </span>}
              {label} :
            </label>
          )}
          <h6>
            i<span>{info}</span>
          </h6>
        </header>

        <textarea
          placeholder={placeholder}
          name={name}
          id={id}
          className={`ch_lib_textarea ${className}`}
          style={style}
          value={value}
          rows={rows}
          onChange={onChange}
        ></textarea>
      </div>

      {styleInject}
    </>
  );
};

const styleInject = (
  <style jsx>
    {`
      .ch_lib_textarea_wrapper {
        width: 100%;
      }
      .ch_lib_textarea_wrapper header {
        display: flex;
        justify-content: space-between;
        padding: 0 0.25rem;
      }
      .ch_lib_textarea_wrapper h6 {
        position: relative;
        font-weight: 401;
        padding-top: 0.4rem;
        height: 1.25rem;
        width: 1.25rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: thin solid currentColor;
        white-space: nowrap;
      }

      .ch_lib_textarea_wrapper h6:hover {
        cursor: help;
      }
      .ch_lib_textarea_wrapper h6 span {
        position: absolute;
        opacity: 0;
        right: calc(100% + 0.5rem);
        top: 0;
        transition: 0.3s ease;
      }

      .ch_lib_textarea_wrapper h6:hover span {
        opacity: 1;
      }
      .ch_lib_textarea_wrapper label {
        font-style: italic;
      }
      .ch_lib_textarea {
        font-size: 1rem;
        width: 100%;
        padding: 0.25rem 0.5rem;
        color: currentColor;
        background: transparent;
        border: thin solid currentColor;
        resize: vertical;
        transition: 0.05s ease;
      }
      .ch_lib_textarea:hover {
        outline: thin solid currentColor;
      }
      .ch_lib_textarea:focus {
        outline: thin solid currentColor;
      }
      .ch_lib_textarea::placeholder {
        font-size: 1rem;
      }
    `}
  </style>
);

Textarea.defaultProps = {
  rows: '4',
};
