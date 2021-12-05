import React, { useState } from 'react';

import css from './InputField.module.scss';

export const InputField = ({
  type,
  data,
  setData,
  objKey,

  //
  id,
  className,
  style,
  value,
  placeholder,
  name,
  rows,

  //
  required,
  readOnly,
  //
  label,
  valid,
  info,

  //for select ['str', 'stri']
  options,

  ...props
}) => {
  const [open, setOpen] = useState(false);
  switch (type) {
    case 'input':
      return (
        <div className={`${css.common_wrapper} ${className}`}>
          <header>
            {label || required ? (
              <div className={css.label}>
                {required && <h6 className="sc">*</h6>}

                {label && <h5>{label} :</h5>}
              </div>
            ) : (
              <div></div>
            )}

            {info && (
              <div className={css.info}>
                <h6>i</h6>
                <h5>{info}</h5>
              </div>
            )}
          </header>

          <input
            id={id}
            className={`${css.ele} ${css.input}`}
            style={style}
            value={value}
            placeholder={placeholder}
            name={name}
            //
            onChange={e => setData({ ...data, [objKey]: e.target.value })}
            required={required ? true : false}
            readOnly={readOnly ? true : false}
            //
            // extra functions
            label={label}
            valid={valid}
            info={info}
            {...props}
          />
          {valid && <div className={css.checkmark}>✓</div>}
        </div>
      );
    case 'password':
      return (
        <div className={`${css.common_wrapper} ${className}`}>
          <header>
            {label || required ? (
              <div className={css.label}>
                {required && <h6 className="sc">*</h6>}

                {label && <h5>{label} :</h5>}
              </div>
            ) : (
              <div></div>
            )}

            {info && (
              <div className={css.info}>
                <h6>i</h6>
                <h5>{info}</h5>
              </div>
            )}
          </header>

          <input
            type="password"
            id={id}
            className={`${css.ele} ${css.input}`}
            style={style}
            value={value}
            placeholder={placeholder}
            name={name}
            //
            onChange={e => setData({ ...data, [objKey]: e.target.value })}
            required={required ? true : false}
            readOnly={readOnly ? true : false}
            //
            // extra functions
            label={label}
            valid={valid}
            info={info}
            {...props}
          />
          {valid && <div className={css.checkmark}>✓</div>}
        </div>
      );
    case 'textarea':
      return (
        <div className={`${css.common_wrapper} ${className}`}>
          <header>
            {label || required ? (
              <div className={css.label}>
                {required && <h6 className="sc">*</h6>}

                {label && <h5>{label} :</h5>}
              </div>
            ) : (
              <div></div>
            )}

            {info && (
              <div className={css.info}>
                <h6>i</h6>
                <h5>{info}</h5>
              </div>
            )}
          </header>

          <textarea
            id={id}
            className={`${css.ele} ${css.textarea}`}
            style={style}
            value={value}
            placeholder={placeholder}
            name={name}
            rows={rows ? rows : '4'}
            //
            onChange={e => setData({ ...data, [objKey]: e.target.value })}
            required={required ? true : false}
            readOnly={readOnly ? true : false}
            //
            // extra functions
            label={label}
            valid={valid}
            info={info}
            {...props}
          />
          {valid && <div className={css.checkmark}>✓</div>}
        </div>
      );
    case 'select':
      return (
        <div
          className={`${css.common_wrapper} ${className}`}
          onMouseLeave={() => setOpen(false)}
        >
          <header>
            {label || required ? (
              <div className={css.label}>
                {required && <h6 className="sc">*</h6>}

                {label && <h5>{label} :</h5>}
              </div>
            ) : (
              <div></div>
            )}

            {info && (
              <div className={css.info}>
                <h6>i</h6>
                <h5>{info}</h5>
              </div>
            )}
          </header>

          <div className={`${css.ele} ${css.select}`}>
            <div onClick={() => setOpen(!open)}>
              <div className="sc">
                <p>▼</p>
              </div>
              {(value || placeholder) && value ? (
                <p>{value}</p>
              ) : (
                <p style={{ color: 'lightgray' }}>placeholder</p>
              )}
            </div>

            <ul className={`bg ${open && css.list_open}`}>
              <li
                onClick={() => (
                  setData({ ...data, [objKey]: '' }), setOpen(false)
                )}
              >
                -
              </li>
              {options ? (
                options.map((o, i) =>
                  !(value === o) ? (
                    <li
                      key={`${o}${i}`}
                      onClick={() => (
                        setData({ ...data, [objKey]: o }), setOpen(false)
                      )}
                    >
                      {o}
                    </li>
                  ) : null,
                )
              ) : (
                <></>
              )}
            </ul>
          </div>
          {valid && <div className={css.checkmark}>✓</div>}
        </div>
      );
    default:
      return (
        <div className={`${css.common_wrapper} ${className}`}>
          {`Please specify type:`}
        </div>
      );
  }
};
