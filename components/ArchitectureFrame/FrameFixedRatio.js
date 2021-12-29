import React, { useState, useEffect, useRef } from 'react';
import debounce from 'lodash.debounce';

export const FrameFixedRatio = ({ ...props }) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(props.width);
  const myRef = useRef();

  //init
  useEffect(() => {
    let width = myRef.current.getBoundingClientRect().width;
    let paperRatio = 1.41;
    setHeight(width / paperRatio);
  }, []);

  //listener
  const adjustHeight = debounce(() => {
    setHeight(width / paperRatio);
  }, 250);

  useEffect(() => {
    myRef.current.getBoundingClientRect().width;
    return () => {};
  }, []);

  useEffect(() => {
    console.log('width changed');
  }, [width]);

  const propStyles = {
    width: props.width ? props.width : '100%',
    height: height ? height : props.width ? props.width / 1.41 : 'min-content',
  };

  return (
    <div style={propStyles} className={props.className} ref={myRef}>
      {props.children}
    </div>
  );
};
