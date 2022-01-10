import React from 'react';

import css from '../Icon.module.scss';

export const Week = () => {
  return (
    <g>
      <g className={`${css.stroke_current} ${css.bg_white}`}>
        <rect x="364.5" y="65.5" width="80" height="80" />
        <rect x="264.5" y="65.5" width="80" height="80" />
        <rect x="164.5" y="65.5" width="80" height="80" />
        <rect x="64.5" y="65.5" width="80" height="80" />

        <rect x="364.5" y="265.5" width="80" height="80" />
        <rect x="264.5" y="265.5" width="80" height="80" />
        <rect x="164.5" y="265.5" width="80" height="80" />
        <rect x="64.5" y="265.5" width="80" height="80" />

        <rect x="364.5" y="365.5" width="80" height="80" />
        <rect x="264.5" y="365.5" width="80" height="80" />
        <rect x="164.5" y="365.5" width="80" height="80" />
        <rect x="64.5" y="365.5" width="80" height="80" />
      </g>
      <g className={`${css.fill_current} ${css.stroke_current}`}>
        {/* ROW 2 */}
        <rect x="364.5" y="165.5" width="80" height="80" />
        <rect x="264.5" y="165.5" width="80" height="80" />
        <rect x="164.5" y="165.5" width="80" height="80" />
        <rect x="64.5" y="165.5" width="80" height="80" />
      </g>
    </g>
  );
};
