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
    data: {
      drawingTitle: 'situationsplan',
      project: 'project name',
      imgUrl: 'https://media.chansen.design/architecture/ishallen/a101.jpg',
      owner: 'Jane Doe',
      architect: 'CH',
      handler: 'CH',
      author: 'CH',
      scale: '500',
      date: '2022-01-01',
    },
    logoUrl: '',
  });

  //input constructor
  let componentInfo = {
    title: '<ArchitectureFrame />',
    descr: `
    Swedish architecture drawing frame.

    Scales by width, resize listener that keeps proportions to 1.41 (a4,a3,a2,a1 ratio).
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
        <ArchitectureFrame
          width={`${values.width}%`}
          logoUrl={values.logoUrl}
          data={{ ...values.data }}
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
    padding: '1rem',
  };
  return (
    <>
      <div style={styles}>{children}</div>
    </>
  );
};
