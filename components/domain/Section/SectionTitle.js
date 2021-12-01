import React from 'react';

export const SectionTitle = ({ title }) => {
  const style = {
    container: {
      marginBottom: '3rem',
    },
    figure: {
      width: '4rem',
      height: '1rem',
      border: 'none',
      borderRadius: '0.5rem',
      marginBottom: '1rem',
      boxShadow: 'inset 4rem 0 3rem -4rem currentColor',
      marginLeft: '-1rem',
    },
  };
  return (
    <section style={style.container}>
      <figure style={style.figure} />
      <h3>{title}</h3>
    </section>
  );
};
