import { useState } from 'react';

import { Button } from 'components';

import css from './PropMenu.module.scss';

export const PropMenu = ({ data, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`bg pc3b ${css.propMenu}`}>
      <Info
        open={open}
        setOpen={setOpen}
        title={data.title}
        descr={data.descr}
      />
      {children}
    </div>
  );
};

const Info = ({ open, setOpen, title, descr }) => {
  return (
    <div className={`${css.info}`}>
      <h4 className="sc">{title}</h4>

      <div style={{ display: 'flex' }} onClick={() => setOpen(!open)}>
        <h6 className="pc5">{open ? '▲' : '▼'}</h6>
        <h6 className="pc">descr:</h6>
      </div>

      <h5 className={`${!open && css.h5_closed} sc1bg`}>{descr}</h5>
    </div>
  );
};
