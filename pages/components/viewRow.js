//The component
import { Row } from 'components';

//for this page
import { useState } from 'react';
import { PropMenu, PropInput } from 'components/DOMAIN';
import css from './view.module.scss';

export default function ViewCanvas({ colors }) {
  //input
  const [values, setValues] = useState({
    child: 'The',
    childr: 'pig',
    childre: 'of',
    children: 'pie',
    gap: '1rem',
  });

  //input constructor
  let componentInfo = {
    title: '<Row />',
    descr:
      'Ease of life component for quickly making labeled text and rows of text',
  };
  let propInputs = [
    {
      type: 'input',
      label: 'child',
      objKey: 'child',
    },
    {
      type: 'input',
      label: 'child',
      objKey: 'childr',
    },
    {
      type: 'input',
      label: 'child',
      objKey: 'childre',
    },
    {
      type: 'input',
      label: 'child',
      objKey: 'children',
    },
    {
      type: 'input',
      label: 'gap',
      objKey: 'gap',
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
        <Row gap={`${values.gap}`}>
          <div>{values.child}</div>
          <div>{values.childr}</div>
          <div>{values.childre}</div>
          <div>{values.children}</div>
        </Row>
      </View>
    </div>
  );
}

//For customizing css rules of the view container
const View = ({ children }) => {
  const styles = {
    height: '100%',
    width: 'min-content',
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
