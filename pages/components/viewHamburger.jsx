import { useState } from 'react';

import { Hamburger } from 'components';
import { PropMenu, PropInput } from '@/components/DOMAIN';

import css from './view.module.scss';

export default function ViewHamburger() {
  const [values, setValues] = useState({
    size: '4rem',
    openClose: false,
  });

  const data = {
    title: '<Hamburger />',
    descr: 'Hamburger component',
    propertyInput: [
      {
        type: 'input',
        label: 'size',
        objKey: 'size',
      },
      {
        type: 'ternary',
        label: 'openClose',
        objKey: 'openClose',
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
              increment={p.increment}
              range={p.range}
            />
          ))}
        </PropMenu>

        <View>
          <Hamburger
            size={values.size}
            ternary={values.openClose}
            onClick={() => {
              setValues({ ...values, openClose: !values.openClose });
            }}
          />
        </View>
      </div>

      <style jsx>{`
        @media screen and (max-width: 425px) {
          .view_wrapper {
            padding: 0 3vw;
            grid-gap: 1rem;
            grid-template:
              'props' auto
              'view' 1fr / 1fr;
          }
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
