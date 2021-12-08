import { useState } from 'react';

import { Logo } from 'components';
import { PropMenu, PropInput } from '@/components/DOMAIN';

import css from './view.module.scss';

export default function ViewCanvas({ colors }) {
  const [values, setValues] = useState({
    numberKey: 40,
    inputKey: '',
    textareaKey: '',
    ternaryKey: false,

    height: 'auto',
    width: '50%',
    pc: 'primary',
    sc: 'secondary',
  });

  const data = {
    title: '<Logo />',
    descr:
      'Chansen Design Logo, .svg format. Only the "fill" props are used for coloring. pc = PrimaryColor, accepts string like css. sc = SecondaryColor',
    propertyInput: [
      {
        type: 'input',
        label: 'height',
        objKey: 'height',
      },
      {
        type: 'input',
        label: 'width',
        objKey: 'width',
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
          <Logo
            height={values.height}
            width={values.width}
            pc={colors.pc}
            sc={colors.sc}
          />
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

            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};
