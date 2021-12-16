//The component
import { Loading } from 'components';

//for this page
import { useState } from 'react';
import { PropMenu, PropInput } from '@/components/DOMAIN';
import css from './view.module.scss';

export default function ViewCanvas({ colors }) {
  //input
  const [values, setValues] = useState({
    type: 'dotted',
    text: 'Loading',
  });
  //input constructor
  const inputConstructor = {
    title: '<Loading />',
    descr: 'Self contained loading animations',

    //see PropInput component for dif 'types'
    propertyInput: [
      {
        type: 'dropdown',
        options: ['dotted', 'circular'],
        label: 'type',
        objKey: 'type',
      },
      {
        type: 'input',
        label: 'text',
        objKey: 'text',
      },
    ],
  };

  return (
    <>
      <div className={css.main}>
        <PropMenu data={inputConstructor} values={values} setValues={setValues}>
          {inputConstructor.propertyInput.map((p, i) => (
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
            />
          ))}
        </PropMenu>

        <View>
          {/* component */}
          <Loading text={values.text} type={values.type} />
        </View>
      </div>
    </>
  );
}

//For customizing css rules of the view container
const View = ({ children }) => {
  const styles = {
    height: '100%',
    width: '100%',
    padding: '0',
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
