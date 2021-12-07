import React from 'react';

import css from './SlideTemplate.module.scss';

export const SlideTemplate = ({ data, template }) => {
  switch (template) {
    case 0:
      return <Content data={data} cName={css.zero} />;
    case 1:
      return <Content data={data} cName={css.one} />;
    case 2:
      return <Content data={data} cName={css.two} />;
    case 3:
      return <Content data={data} cName={css.three} />;
    case 4:
      return <Content data={data} cName={css.four} />;
    case 5:
      return <Content data={data} cName={css.five} />;
    default:
      return <Content data={data} cName={css.zero} />;
  }
};

const Content = ({ data, cName }) => {
  return (
    <div className={`bg ${css.common} ${cName}`}>
      <h4 className="sc">{data.title}</h4>
      <p>{data.body}</p>
      <div className={css.imgContainer}>
        <img src={data.url} />
      </div>
    </div>
  );
};
