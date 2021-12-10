import React, { useState, useEffect } from 'react';
import axios from 'axios';

import css from './DBimgPicker.module.scss';

export const DBimgPicker = ({
  size,
  factor,
  strokeWidth,
  value,
  objKey,
  setData,
  data,
  onClick,
  ...props
}) => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function getMedia() {
      const { data } = await axios.get(
        'https://chansendesign.herokuapp.com/media',
      );

      setMedia(data);
    }
    getMedia();
  }, []);

  return (
    <div className={css.wrapper}>
      <h4 className="sc">title data</h4>

      <div className={css.scrollWindow}>
        {media &&
          media.map((img, i) => (
            <div
              key={img._id}
              onClick={() => setData && setData({ ...data, [objKey]: img.url })}
            >
              <img
                className={css.img}
                height="100px"
                width="100px"
                src={img.url}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
};
