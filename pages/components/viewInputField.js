import { useState } from 'react';

import { PropMenu, PropInput } from 'components/DOMAIN';
import { InputField } from 'components';
import { Button } from 'chansencode-lib';

import css from './view.module.scss';

export default function ViewDiagram() {
  const [values, setValues] = useState({
    type: 'input',
    value: 'input',
    label: 'label',
    formData: 'example',
    info: '2 < characters, no spec. chars.',
    placeholder: 'placeholder',
    required: false,
    valid: false,
    options: ['cow', 'horse', 'pig', 'chicken'],
  });

  const data = {
    title: '<InputField />',
    descr: 'Input, textarea, select, radio & number all in one',
    propertyInput: [
      {
        type: 'dropdown',
        label: 'type',
        options: ['input', 'password', 'select', 'textarea'],
        objKey: 'type',
      },
      {
        type: 'input',
        label: 'value',
        objKey: 'formData',
      },
      {
        type: 'input',
        label: 'label',
        objKey: 'label',
      },
      {
        type: 'input',
        label: 'placeholder',
        objKey: 'placeholder',
      },
      {
        type: 'input',
        label: 'info',
        objKey: 'info',
      },
      {
        type: 'ternary',
        label: 'required',
        objKey: 'required',
      },
      {
        type: 'ternary',
        label: 'valid',
        objKey: 'valid',
      },
      {
        type: 'etc',
        labels: [
          'id',
          'className',
          'style',
          'name',
          'rows',
          'required',
          'disabled',
          'onChange',
        ],
      },
    ],
  };

  return (
    <>
      <div className={css.main}>
        <PropMenu data={data} values={values} setValues={setValues}>
          <br />
          <p style={{ marginBottom: '0.5rem' }}>PROPS:</p>
          {data.propertyInput.map((p, i) =>
            !(p.type === 'etc') ? (
              <PropInput
                key={`${p.descr}${i}`}
                label={p.label}
                objKey={p.objKey}
                type={p.type}
                options={p.options}
                values={values}
                setValues={setValues}
                increments={p.increments}
              />
            ) : null,
          )}
          <br />
          <br />
          <h5>unlisted PROPS:</h5>
          {data.propertyInput.map((p, i) =>
            p.type === 'etc' ? (
              <div key={`etc${p.label}`}>
                {p.labels.map((addProps, i) => (
                  <h5 className={`${css.etc} sc`} key={addProps}>
                    {addProps}
                  </h5>
                ))}
              </div>
            ) : null,
          )}
        </PropMenu>

        <View>
          <div className="imp_wrapper">
            <h4 className="sc">example form</h4>
            <InputField
              type={values.type}
              //
              data={values}
              setData={setValues}
              objKey={'formData'}
              value={values.formData}
              options={values.options}
              //style
              label={values.label}
              placeholder={values.placeholder}
              valid={values.valid}
              required={values.required}
              info={values.info}
            />
          </div>
        </View>
      </div>

      <style jsx>{`
        .imp_wrapper {
          width: 24rem;
          border: thin solid;
          box-shadow: 0 0 3rem -2rem currentColor;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}

const View = ({ children }) => {
  return (
    <>
      <div className="view_view pc3b">{children}</div>

      <style jsx>
        {`
          .view_view {
            height: 100%;
            width: 100%;
            box-shadow: 0 0 3rem -1.5rem currentColor;

            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};
