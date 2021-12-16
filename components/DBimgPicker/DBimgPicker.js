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
  const [error, setError] = useState('');

  async function getMedia() {
    let res = fetch('https://chansendesign.herokuapp.com/media')
      .then(res => res.json())
      .then(json => {
        try {
          setMedia(json);
        } catch (error) {
          setError(error);
        }
      });
  }
  //#region ** FETCH
  useEffect(() => {
    async function getMedia() {
      let res = fetch('https://chansendesign.herokuapp.com/media')
        .then(res => res.json())
        .then(json => {
          try {
            setMedia(json);
          } catch (error) {
            setError(error);
          }
        });
    }
    getMedia();
  }, []);
  //#endregion

  const propStyle = () => {};

  return (
    <>
      <div className={css.wrapper}>
        <h4 className="sc">title data</h4>

        {media.length ? (
          <div className={css.scrollWindow}>
            {media &&
              media.map((img, i) => (
                <div
                  key={img._id}
                  onClick={() =>
                    setData && setData({ ...data, [objKey]: img.url })
                  }
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
        ) : !error ? (
          <Loading />
        ) : (
          <>{`There was a problem retrieving data`}</>
        )}

        {process.env.NODE_ENV === 'development' && (
          <div>
            <h6>only shown in dev</h6>
            <div style={{ display: 'flex' }}>
              <button
                className={error ? 'sc' : ''}
                onClick={() => (error ? setError('') : setError('test'))}
              >
                error
              </button>
              <button onClick={() => (media ? setMedia([]) : getMedia())}>
                loading
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const Loading = () => {
  return <div>loading . . .</div>;
};
