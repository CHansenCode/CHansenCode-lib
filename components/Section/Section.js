import React from 'react';

import { SectionTitle } from './SectionTitle';

export const Section = ({
  //custom
  title,

  //composition
  minHeight,
  maxWidth,
  padding,
  margin,

  //flex
  center,
  column,
  fullWidth,

  //html
  myRef,
  id,
  className,
  children,
}) => {
  const propStyles = {
    //composition
    maxWidth: fullWidth ? '100%' : maxWidth,
    minHeight: minHeight,
    padding: padding,
    margin: margin,

    //flex
    display: (center || column) && 'flex',
    alignItems: center && 'center',
    justifyContent: center && 'center',
    flexDirection: column && 'column',
  };
  return (
    <>
      {title && <SectionTitle title={title} />}
      <section id={id} className={className} ref={myRef} style={propStyles}>
        {children}
      </section>
    </>
  );
};

Section.defaultProps = {
  padding: '0 0 3vw 0',
};
