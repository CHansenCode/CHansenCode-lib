import { useState } from 'react';

import { LayeredImage } from 'components';
import { PropMenu, PropInput } from '@/components/DOMAIN';

import css from './view.module.scss';

export default function ViewCanvas() {
  const [values, setValues] = useState({
    distortMax: 20,
    overflow: false,
    throttle: 100,
  });

  const data = {
    title: '<LayeredImage />',
    descr:
      'Designed to give a user-interactive experience of layered partially transparent .png images',
    propertyInput: [
      {
        type: 'number',
        label: 'distortMax',
        objKey: 'distortMax',
        increments: { small: 1, large: 5 },
        range: { min: 0, max: 100 },
      },
      {
        type: 'ternary',
        label: 'overflow',
        objKey: 'overflow',
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
          <div id="half_size_wrapper">
            <LayeredImage
              distortMax={values.distortMax}
              overflow={!values.overflow}
              throttle={values.throttle}
            >
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
            </LayeredImage>
          </div>
        </View>
      </div>

      <style jsx>{`
        #half_size_wrapper {
          height: 35%;
          width: 35%;
        }
        .rectangle_layered {
          border: thin solid;
          height: 100%;
          width: 100%;
        }
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
      <div className="view_view">{children}</div>

      <style jsx>
        {`
          .view_view {
            height: 100%;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};
