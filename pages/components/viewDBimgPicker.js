import { useState } from 'react';

import { DBimgPicker } from 'components';
import { PropMenu, PropInput } from '@/components/DOMAIN';

import css from './view.module.scss';

export default function ViewCanvas() {
  const [values, setValues] = useState({
    temp: '',
  });

  const data = {
    title: '<DBimgPicker />',
    descr: 'Easy module for picking images from media server',
    propertyInput: [
      {
        type: 'input',
        label: 'temp',
        objKey: 'temp',
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
          <DBimgPicker />
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

            display: flex;
            align-items: center;
            justify-content: center;
            
            padding: ${padding ? padding : '0'}
            box-shadow: 0 0 3rem -1.5rem currentColor;
          }
        `}
      </style>
    </>
  );
};
