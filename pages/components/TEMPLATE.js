//The component
import { Example } from 'components';

//for this page
import { useState } from 'react';
import { PropMenu, PropInput } from 'components/DOMAIN';
import css from './view.module.scss';

export default function ViewCanvas({ colors }) {
  //input
  const [values, setValues] = useState({
    input: 'example text',
    number: 1,
    textarea: 'I am example text and is meant for rather long texts',
    ternary: true,
    select: 'cow',
    dropdown: 'house',
  });

  //input constructor
  let componentInfo = {
    title: '<ExampleName />',
    descr:
      'Short foldable description if you wanna inform the viewers of anything in particular regarding the component',
  };
  let propInputs = [
    {
      type: 'input',
      label: 'input',
      objKey: 'input',
    },
    {
      type: 'number',
      label: 'number',
      objKey: 'number',
      increments: { small: 1, large: 5 },
    },
    {
      type: 'textarea',
      label: 'textarea',
      objKey: 'textarea',
      rows: 3,
    },
    {
      type: 'ternary',
      label: 'ternary',
      objKey: 'ternary',
    },
    {
      type: 'select',
      label: 'select',
      objKey: 'select',
      options: ['cow', 'horse', 'fox', 'cat', 'pony', 'hen', 'wolf'],
    },
    {
      type: 'dropdown',
      label: 'dropdown',
      objKey: 'dropdown',
      options: ['house', 'fence', 'garden', 'chimney', 'shed'],
    },
  ];

  return (
    <div className={css.main}>
      <PropMenu data={componentInfo} values={values} setValues={setValues}>
        {propInputs.map((p, i) => (
          <PropInput
            //shared values
            key={`${p.descr}${i}`}
            type={p.type}
            label={p.label}
            objKey={p.objKey}
            values={values}
            //shared funcs
            setValues={setValues}
            //
            //type: number
            increment={p.increment} //default, {small: 1, large: 5}
            range={p.range}
            //type: select
            options={p.options}
            //type: textarea
            rows={p.rows}
          />
        ))}
      </PropMenu>

      <View>
        {/* COMPONENT GOES HERE */}
        <Example
          input={values.input}
          number={values.number}
          textarea={values.textarea}
          ternary={values.ternary}
          select={values.select}
          dropdown={values.dropdown}
        />
      </View>
    </div>
  );
}

//For customizing css rules of the view container
const View = ({ children }) => {
  const styles = {
    height: '100%',
    width: '100%',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <>
      <div style={styles} className="view_view pc3b">
        {children}
      </div>

      <style jsx>
        {`
          .view_view {
            box-shadow: 0 0 3rem -1.5rem currentColor;
          }
        `}
      </style>
    </>
  );
};
