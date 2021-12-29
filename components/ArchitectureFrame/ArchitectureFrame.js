import React from 'react';
import debounce from 'lodash.debounce';
import { useState, useEffect, useRef } from 'react';

import { Legend } from './Legend';
import { FrameFixedRatio } from './FrameFixedRatio';

import css from './ArchitectureFrame.module.scss';

export const ArchitectureFrame = ({
  width,
  title,
  project,
  imgSrc,
  children,
}) => {
  return (
    <FrameFixedRatio width={width} className={css.wrapper}>
      <div className={css.container}>
        <div id={css.view}>
          {children ? (
            children
          ) : (
            <div>
              {imgSrc ? (
                <img height="100%" width="100%" src={imgSrc} alt="" />
              ) : (
                'no imgSrc prop found'
              )}
            </div>
          )}
        </div>

        <footer id={css.footer}>
          <h4>{title}</h4>
        </footer>

        <Legend
          id={css.arch_legend}
          data={{ title: 'cow' }}
          project={project}
        />
      </div>
    </FrameFixedRatio>
  );
};

ArchitectureFrame.defaultProps = {
  title: 'drawing title',
};

export default ArchitectureFrame;
