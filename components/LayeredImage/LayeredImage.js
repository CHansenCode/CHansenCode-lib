import React, { useState, useEffect, useRef } from 'react';

import css from './LayeredImage.module.scss';

export const LayeredImage = ({ distortMax, children }) => {
  const [throttle, setThrottle] = useState(true);
  const [coords, setCoords] = useState({
    clientX: 0,
    clientY: 0,
    percentageX: 0,
    percentageY: 0,
    distortionFactorX: 0,
    distortionFactorY: 0,
  });

  const boundingBox = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setThrottle(false);
    }, 50);
  }, [throttle]);

  async function calculateCoords(e) {
    const { left, top, width, height } =
      boundingBox.current.getBoundingClientRect();

    const newValues = {
      clientX: e.clientX - left,
      clientY: e.clientY - top,
      percentageX: (((e.clientX - left) / width) * 100).toFixed(1),
      percentageY: (((e.clientY - top) / height) * 100).toFixed(1),
      distortionFactorX: (((e.clientX - left) / width - 0.5) * 2).toFixed(2),
      distortionFactorY: (((e.clientY - top) / height - 0.5) * 2).toFixed(2),
    };

    !throttle && setCoords({ ...coords, ...newValues });
    !throttle && setThrottle(true);
  }

  return (
    <div
      ref={boundingBox}
      className={css.wrapper}
      onMouseMove={e => calculateCoords(e)}
    >
      {coords && process.env.NODE_ENV !== 'production' && (
        <>
          <h6>{coords.clientX}</h6>
          <h6>{coords.clientY}</h6>
          <h6>{coords.percentageX}</h6>
          <h6>{coords.percentageY}</h6>
          <h6>{coords.distortionFactorX}</h6>
          <h6>{coords.distortionFactorY}</h6>
        </>
      )}

      {children &&
        children.length > 1 &&
        children.map((child, i) => (
          <Wrapper
            key={`layeredImage${i}`}
            i={i}
            distortMax={distortMax}
            length={children && children.length}
            coords={coords}
          >
            {child}
          </Wrapper>
        ))}
    </div>
  );
};

LayeredImage.defaultProps = {
  distortMax: 10,
};

const Wrapper = ({ distortMax, children, length, i, coords }) => {
  //%
  let maxDistortion = distortMax;

  //child[0] = 0% distortion, :nth-last-child = maxDistortion%
  let translateX =
    maxDistortion * ((i + 1) / length) * coords.distortionFactorX;
  let translateY =
    maxDistortion * ((i + 1) / length) * coords.distortionFactorY;

  const styles = {
    transform: `translate(${translateX}%, ${translateY}%)`,
  };

  return (
    <div style={styles} className={css.childWrapper}>
      {children}
    </div>
  );
};
