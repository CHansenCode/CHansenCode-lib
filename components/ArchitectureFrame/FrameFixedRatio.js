import React, { useState, useEffect, useRef } from 'react';

export const FrameFixedRatio = ({ ...props }) => {
  const [dimensions, setDimensions] = useState({
    height: 1,
    width: 1,
  });

  const wrapper = useRef(null);

  useEffect(() => {
    const checkWidth = setInterval(() => {
      const current = wrapper && wrapper.current;
      //
      let currentWidth = current.getBoundingClientRect().width;

      if (!(currentWidth === dimensions.width)) {
        setDimensions({
          width: currentWidth.toFixed(0),
        });
      }
    }, 500);

    return () => {
      clearInterval(checkWidth);
    };
  }, [wrapper]);

  useEffect(() => {
    setDimensions({
      ...dimensions,
      height: (dimensions.width / 1.41).toFixed(0),
    });
  }, [dimensions.width]);

  const propStyles = {
    width: props.width ? props.width : '100%',
    height: `${dimensions.height}px`,
    overflow: 'hidden',
  };

  return (
    <div style={propStyles} className={props.className} ref={wrapper}>
      {props.children}
    </div>
  );
};
