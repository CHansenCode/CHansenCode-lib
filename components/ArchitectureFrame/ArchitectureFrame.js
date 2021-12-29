import React from 'react';

import { FrameFixedRatio } from './FrameFixedRatio';
import { Legend } from './Legend';

import css from './ArchitectureFrame.module.scss';

export const ArchitectureFrame = ({ width, logoUrl, data, children }) => {
  return (
    <FrameFixedRatio width={width} className={css.wrapper}>
      <div className={css.container}>
        <div id={css.view}>
          {children ? (
            children
          ) : (
            <div>
              {data.imgUrl ? (
                <img height="100%" width="100%" src={data.imgUrl} alt="" />
              ) : (
                'no imgSrc prop found'
              )}
            </div>
          )}
        </div>

        <footer id={css.footer}>
          <h4>{data.drawingTitle ? data.drawingTitle : '...'}</h4>
        </footer>

        <Legend id={css.arch_legend} logoUrl={logoUrl} data={data} />
      </div>
    </FrameFixedRatio>
  );
};
