import React, { useState, useEffect } from 'react';

import css from './LayeredImage.module.scss';

export const LayeredImage = () => {
  const [throttle, setThrottle] = useState(false);
  const [helo, setHelo] = useState({
    clientX: 0,
    clientY: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setThrottle(false);
    }, 150);
  }, [throttle]);

  async function handleEvent(e) {
    let newObject = { clientX: e.clientX, clientY: e.clientY };

    !throttle && setHelo(newObject);
    !throttle && setThrottle(true);
  }

  return (
    <div className={css.wrapper}>
      <h5>clientY: {helo.clientY}</h5>
      <h5>clientX: {helo.clientX}</h5>
      <h5>Throttle: {throttle ? 'true' : 'false'}</h5>

      <div className={css.abs} onMouseMove={e => handleEvent(e)}>
        <div className={css.circle} />
      </div>
    </div>
  );
};
