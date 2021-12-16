import { useState } from 'react';

import { Button, Input, Textarea } from 'components';

import css from './PropInput.module.scss';

export const PropInput = ({
  //shared values
  type,
  label,
  objKey,
  values,
  //func
  setValues,
  //number
  increments,
  //select
  options,
  //textarea
  rows,
}) => {
  const [open, setOpen] = useState(false);
  switch (type) {
    case 'input':
      return (
        <div className={`${css.common} ${css.input_wrapper}`}>
          {label && <Label label={label} />}
          <Input
            className={`${css.input}`}
            value={values[objKey]}
            onChange={e => setValues({ ...values, [objKey]: e.target.value })}
          />
        </div>
      );
    case 'textarea':
      return (
        <div className={css.common}>
          {label && <Label label={label} />}

          <Textarea
            className={`${css.textarea}`}
            value={values[objKey]}
            rows={rows}
            onChange={e => setValues({ ...values, [objKey]: e.target.value })}
          />
        </div>
      );
    case 'number':
      return (
        <div className={`${css.common} ${css.number}`}>
          {label && <Label label={label} />}

          <div>
            <div>
              <Button
                onClick={e =>
                  setValues({
                    ...values,
                    [objKey]:
                      values[objKey] - (increments ? increments.big : 5),
                  })
                }
              >
                {`<<`}
              </Button>
              <Button
                onClick={e =>
                  setValues({
                    ...values,
                    [objKey]:
                      values[objKey] - (increments ? increments.small : 1),
                  })
                }
              >
                {'<'}
              </Button>
            </div>

            <p>{values[objKey]}</p>

            <div>
              <Button
                onClick={e =>
                  setValues({
                    ...values,
                    [objKey]:
                      values[objKey] + (increments ? increments.small : 1),
                  })
                }
              >
                {'>'}
              </Button>
              <Button
                onClick={e =>
                  setValues({
                    ...values,
                    [objKey]:
                      values[objKey] + (increments ? increments.big : 5),
                  })
                }
              >
                {'>>'}
              </Button>
            </div>
          </div>
        </div>
      );
    case 'ternary':
      return (
        <div className={`${css.common} ${css.ternary}`}>
          {label && <Label label={label} />}

          <Button
            className={values[objKey] ? css.ternary_true : css.ternary_false}
            onClick={() => setValues({ ...values, [objKey]: !values[objKey] })}
          >
            {values[objKey] ? 'true' : 'false'}
          </Button>
        </div>
      );
    case 'select':
      return (
        <div className={`${css.common} ${css.select}`}>
          {label && <Label label={label} />}

          <div>
            {options ? (
              options.map((opt, i) => (
                <Button
                  className={values[objKey] === opt && 'sc'}
                  key={`${opt}${i}`}
                  onClick={() => setValues({ ...values, [objKey]: opt })}
                >
                  {opt}
                </Button>
              ))
            ) : (
              <p>
                'no array found in <span className="sc">"OPTIONS"</span> prop of
                'select' type inputConstructor'
              </p>
            )}
          </div>
        </div>
      );
    case 'dropdown':
      return (
        <div
          className={`${css.common} ${css.dropdown_wrapper}`}
          onMouseLeave={() => setOpen(false)}
        >
          {label && <Label label={label} />}

          <header className="pc5b" onClick={() => setOpen(!open)}>
            <p className="sc">{values[objKey]}</p>
            <h5 className={`pc5 ${open ? css.dropOpen : ''}`}>{`▼`}</h5>
          </header>

          <ul
            className={`bg pc3b ${css.dropdown_ul} ${
              open ? css.dropdown_ul_open : ''
            }`}
          >
            {options.map((opt, i) =>
              !(values[objKey] === opt) ? (
                <h5
                  className={css.option}
                  key={`${opt}${i}`}
                  onClick={() =>
                    setValues({ ...values, [objKey]: opt }, setOpen(false))
                  }
                >
                  {opt}
                </h5>
              ) : null,
            )}
          </ul>
        </div>
      );
    default:
      return 'TYPE: not found';
  }
};

const Label = ({ label }) => {
  return <h5 className={`sc ${css.label}`}>{label} :</h5>;
};
