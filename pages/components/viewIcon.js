//The component
import { Icon } from 'components';

//for this page
import { useState } from 'react';
import { PropMenu, PropInput } from 'components/DOMAIN';
import css from './view.module.scss';

export default function ViewCanvas({ colors }) {
  //input
  const [values, setValues] = useState({
    type: 'day',
    size: 2,
  });

  //input constructor
  let componentInfo = {
    title: '<Icon />',
    descr: 'Collection of Icons in a switch component',
  };
  let propInputs = [
    {
      type: 'number',
      label: 'Size',
      objKey: 'size',
    },
    {
      type: 'dropdown',
      label: 'Type',
      objKey: 'type',
      options: ['month', 'week', 'day'],
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
        <Icon size={`${values.size}rem`} type={values.type} />
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
