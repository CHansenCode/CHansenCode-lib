import { useState } from 'react';

import { LayeredImage } from 'components';
import { PropMenu, PropInput } from 'components/domain';

import css from './view.module.scss';

export default function ViewCanvas() {
  const [values, setValues] = useState({
    numberKey: 40,
    inputKey: '',
    textareaKey: '',
    ternaryKey: false,
  });

  const data = {
    title: '<ExampleName />',
    descr:
      'Short foldable description if you wanna inform the viewers of anything in particular',
    propertyInput: [
      {
        type: 'number',
        label: 'number',
        objKey: 'numberKey',
        increments: { small: 1, large: 5 },
      },
      {
        type: 'input',
        label: 'input',
        objKey: 'inputKey',
      },
      {
        type: 'textarea',
        label: 'textarea',
        objKey: 'textareaKey',
      },
      {
        type: 'ternary',
        label: 'ternary',
        objKey: 'ternaryKey',
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
              increment={p.increment}
              range={p.range}
            />
          ))}
        </PropMenu>

        <View padding="0">
          {/* COMPONENT GOES HERE */}
          <LayeredImage />
        </View>
      </div>

      <style jsx>{``}</style>
    </>
  );
}

const View = ({ children, padding }) => {
  return (
    <>
      <div className="view_view pc3b">{children}</div>

      <style jsx>
        {`
          .view_view {
            height: 100%;
            width: 100%;
            padding: ${padding ? padding : '0'}
            box-shadow: 0 0 3rem -1.5rem currentColor;
          }
        `}
      </style>
    </>
  );
};
