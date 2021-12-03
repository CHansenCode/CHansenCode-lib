import { useState } from 'react';

import { Diagram } from 'components';
import { PropMenu, PropInput } from '@/components/DOMAIN';

import css from './view.module.scss';

export default function ViewDiagram() {
  const [values, setValues] = useState({
    size: '50%',
    factor: 40,
    strokeWidth: 30,
  });

  const data = {
    title: '<Diagram />',
    descr: 'svg prop cofigurable loading component',
    propertyInput: [
      {
        type: 'input',
        label: 'size',
        objKey: 'size',
      },
      {
        type: 'number',
        label: 'factor',
        objKey: 'factor',
        increments: { small: 5, big: 20 },
      },
      {
        type: 'number',
        label: 'strokeWidth',
        objKey: 'strokeWidth',
        increments: { small: 2, big: 10 },
      },
      {
        type: 'etc',
        label: 'onClick',
        objKey: 'onClick',
      },
    ],
  };

  return (
    <>
      <div className={css.main}>
        <PropMenu data={data} values={values} setValues={setValues}>
          <br />
          <p style={{ marginBottom: '0.5rem' }}>PROPS:</p>
          {data.propertyInput.map((p, i) => (
            <PropInput
              key={`${p.descr}${i}`}
              label={p.label}
              objKey={p.objKey}
              type={p.type}
              values={values}
              setValues={setValues}
              increments={p.increments}
            />
          ))}
        </PropMenu>

        <View>
          <Diagram
            size={values.size}
            padding="1rem"
            strokeWidth={values.strokeWidth}
            factor={values.factor / 100}
          />
        </View>
      </div>

      <style jsx>{``}</style>
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
