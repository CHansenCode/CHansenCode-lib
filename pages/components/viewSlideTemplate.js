import { useState } from 'react';

import { SlideTemplate } from 'components';
import { PropMenu, PropInput } from '@/components/DOMAIN';

import css from './view.module.scss';

export default function ViewCanvas() {
  const [controller, setController] = useState({
    asideProportion: 3,
  });
  const [values, setValues] = useState({
    template: 0,
    title: 'a title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor fugit molestias corrupti inventore accusantium ducimus laboriosam itaque temporibus, nulla officia beatae similique animi quod praesentium placeat, nam consequatur, quasi quos magni ipsa quas repudiandae! Ab voluptatum corporis quas soluta rem. Tenetur omnis, alias totam eum maxime eius facere eligendi?',
    url: 'https://media.chansen.design/placeholder.jpg',
  });

  const data = {
    title: '<SlideTemplate />',
    descr:
      'Used on cms for editing Presentations, used on website for presentation',
    propertyInput: [
      {
        type: 'dropdown',
        label: 'template',
        objKey: 'template',
        options: ['intro', 0, 1, 2, 3, 4, 5],
      },
      {
        type: 'input',
        label: 'title',
        objKey: 'title',
      },
      {
        type: 'textarea',
        label: 'body',
        objKey: 'body',
        rows: 10,
      },
    ],
  };

  return (
    <>
      <div className={css.main}>
        <PropMenu
          data={data}
          values={values}
          setValues={setValues}
          onExpand={() => setController()}
        >
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
              options={p.options}
              rows={p.rows}
            />
          ))}
        </PropMenu>

        <View>
          <SlideTemplate template={values.template}>
            <h4 className="sc">{values.title}</h4>
            <p>{values.body}</p>
            <div className={css.imgContainer}>
              <img src="https://media.chansen.design/placeholder.jpg" />
            </div>
          </SlideTemplate>
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
            height: 80vh;
            width: 100%;
            box-shadow: 0 0 3rem -1.5rem currentColor;
          }
        `}
      </style>
    </>
  );
};
