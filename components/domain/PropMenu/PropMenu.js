import { useState } from 'react';

import css from './PropMenu.module.scss';

export const PropMenu = ({ data, children }) => {
  return (
    <div className={`bg pc3b ${css.propMenu}`}>
      <Card title={data.title} descr={data.descr} />
      {children}
    </div>
  );
};

const Card = ({ title, descr }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`${css.card} pc1bg`}>
      <h4 className="sc">{title}</h4>

      {descr && (
        <div
          className={`${css.descr} ${open ? css.descr_open : ''}`}
          onClick={() => setOpen(!open)}
        >
          <header>
            <h6 className="pc5">{open ? '▲' : '▼'}</h6>
            <h6 className="sc">description:</h6>
          </header>

          <h5 className={`bg pc3b`}>{descr}</h5>
        </div>
      )}
    </div>
  );
};
