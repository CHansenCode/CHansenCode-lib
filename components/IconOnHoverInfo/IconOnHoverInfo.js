import React from 'react';

import { useState } from 'react';

export const IconOnHoverInfo = ({ text, forceHover }) => {
  const [hover, setHover] = useState(false);

  function onMouseEnter() {
    setHover(true);
  }
  function onMouseLeave() {
    setHover(false);
  }

  const style = {
    wrapper: {
      position: 'relative',
      height: '1rem',
      width: '1rem',

      textAlign: 'right',

      display: 'flex',
      justifyContent: 'flex-end',

      pointer: 'help',
    },

    icon: {
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: 'thin solid currentColor',
    },

    onHover: {
      position: 'absolute',
      top: 0,
      right: '1rem',
      marginRight: '1rem',
      background: '#fff',
      whiteSpace: 'nowrap',
    },
  };

  return (
    <div
      style={style.wrapper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div style={style.icon}>
        <h6>i</h6>
      </div>

      {(forceHover || hover) && <h5 style={style.onHover}>{text}</h5>}
    </div>
  );
};
