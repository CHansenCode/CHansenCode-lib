import React, { useState, useRef, useCallback } from 'react';
import throttle from 'lodash.throttle';

import css from './LayeredImage.module.scss';

const useThrottledCallback = (callback, wait) => {
  const throttledFunction = useCallback(throttle(callback, wait), []);
  return [throttledFunction];
};

export const LayeredImage = ({ children, ...props }) => {
  const [coords, setCoords] = useState({
    clientX: 0,
    clientY: 0,
    percentageX: 0,
    percentageY: 0,
    distortionFactorX: 0,
    distortionFactorY: 0,
  });

  const boundingBox = useRef(null);

  const [throttleHandler] = useThrottledCallback(
    value => setCoords(value),
    props.throttle,
  );

  const handleMouseMove = useCallback(e => {
    const { left, top, width, height } =
      boundingBox.current.getBoundingClientRect();

    const value = {
      clientX: (e.clientX - left).toFixed(0),
      clientY: (e.clientY - top).toFixed(0),
      percentageX: (((e.clientX - left) / width) * 100).toFixed(1),
      percentageY: (((e.clientY - top) / height) * 100).toFixed(1),
      distortionFactorX: (((e.clientX - left) / width - 0.5) * 2).toFixed(2),
      distortionFactorY: (((e.clientY - top) / height - 0.5) * 2).toFixed(2),
    };

    throttleHandler(value, 100);
  }, []);

  return (
    <div
      ref={boundingBox}
      className={`${css.wrapper} ${props.overflow ? css.overflow : ''}`}
      onMouseMove={e => handleMouseMove(e)}
    >
      {children
        ? children.length > 1 &&
          children.map((child, i) => (
            <Wrapper
              key={`layeredImage${i}`}
              i={i}
              distortMax={props.distortMax}
              length={children && children.length}
              coords={coords}
            >
              {child}
            </Wrapper>
          ))
        : 'Childless'}
    </div>
  );
};

LayeredImage.defaultProps = {
  distortMax: 10,
  throttle: 100,
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
