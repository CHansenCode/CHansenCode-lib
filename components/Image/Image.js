import React from 'react';

import css from './Image.module.scss';

export const Image = ({
  height,

  id,
  className,
  style,
  width,
  dbData,
  alt,
  onHover,
  onClick,

  objectFit,

  src,
}) => {
  const propStyle = {
    height: height,
    width: width,

    img: {
      objectFit: objectFit,
    },
  };
  let placeholder = 'https://media.chansen.design/placeholder.jpg';
  return (
    <div style={{ ...style, ...propStyle }} className={css.wrapper}>
      <img
        className={css.image}
        style={{ ...propStyle.img }}
        alt={alt}
        src={src ? src : placeholder}
      />
      <div className={css.hover}>I am div</div>
    </div>
  );
};
