//The component
import { ArchitectureFrame } from 'components';

//dep's
import { useState } from 'react';
import { PropMenu, PropInput } from 'components/DOMAIN';
import css from './view.module.scss';

export default function ViewArchitectureFrame({ colors }) {
  //input
  const [values, setValues] = useState({
    input: 'example text',
    width: 80,
  });

  //input constructor
  let componentInfo = {
    title: '<ArchitectureFrame />',
    descr: `
    Swedish architecture drawing frame.

    Scales by width, height is set by javascript to contain proportions.
    `,
  };
  let propInputs = [
    {
      type: 'input',
      label: 'input',
      objKey: 'input',
    },
    {
      type: 'number',
      label: 'width %',
      objKey: 'width',
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
        <ArchitectureFrame width={`${values.width}%`} input={values.input} />
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
    padding: '1rem',
  };
  return (
    <>
      <div style={styles}>{children}</div>
    </>
  );
};
