import React from 'react';

import css from './Legend.module.scss';

export const Legend = ({ id, logoUrl, ...props }) => {
  //
  const data = {
    project: props.data.project ? props.data.project : '',
    owner: props.data.owner ? props.data.owner : '',
    architect: props.data.architect ? props.data.architect : '',
    handler: props.data.handler ? props.data.handler : '',
    author: props.data.author ? props.data.author : '',
    scale: props.data.scale ? props.data.scale : '',
    date: props.data.date ? props.data.date : '',
  };

  return (
    <aside id={id} className={css.legend}>
      <header>{props.children}</header>

      <div className={css.logo}>{/* <Logo width="60%" /> */}</div>

      <div className={css.projectInfo}>
        <h6>projectnamn:</h6>
        {data.project ? data.project : '...'}
      </div>

      <footer>
        <Box label="projektägare" value={data.owner} gridArea="proAnsv" />
        <Box label="ansv. ark" value={data.architect} gridArea="ansvArk" />
        <Box label="handl." value={data.handler} gridArea="ritadAv" />
        <Box label="ritad av" value={data.author} gridArea="hand" />
        <Box label="scale" value={`A1 - 1:${data.scale}`} gridArea="scale" />
        <Box label="date" value={data.date} gridArea="date" />
      </footer>
    </aside>
  );
};

const Box = ({ label, value, gridArea }) => {
  return (
    <div style={{ gridArea: gridArea }} className={css.box}>
      <h6>{label}:</h6>
      <h5>{value ? value : '...'}</h5>
    </div>
  );
};
