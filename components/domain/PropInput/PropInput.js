import { Button, Input, Textarea } from 'components';

import css from './PropInput.module.scss';

export const PropInput = ({
  label,
  objKey,
  type,
  values,
  setValues,
  increments,
}) => {
  switch (type) {
    case 'input':
      return (
        <div className={`${css.common} ${css.input_wrapper}`}>
          {label && <h5 className="sc">{label} :</h5>}
          <Input
            className={`${css.input}`}
            value={values[objKey]}
            onChange={e => setValues({ ...values, [objKey]: e.target.value })}
          />
        </div>
      );
    case 'string':
      return (
        <div>
          {label && <h5 className="sc">{label} :</h5>}
          <Textarea
            className={`${css.textarea}`}
            value={values[objKey]}
            onChange={e => setValues({ ...values, [objKey]: e.target.value })}
          />
        </div>
      );
    case 'number':
      return (
        <div className={`${css.common} ${css.number}`}>
          {label && <h5 className="sc">{label} :</h5>}

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
          {label && <h5 className="sc">{label} :</h5>}
          <Button
            onClick={() => setValues({ ...values, [objKey]: !values[objKey] })}
          >
            {values[objKey] ? 'true' : 'false'}
          </Button>
        </div>
      );
    case 'etc':
      return (
        <div className={`${css.common} ${css.ternary}`}>
          {label && <h5 className="sc">{label}</h5>}
        </div>
      );
    default:
      return "please specify 'type:'";
  }
};
