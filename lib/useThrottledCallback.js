import { useCallback } from 'react';
import throttle from 'lodash.throttle';

export const useThrottledCallback = (callback, wait) => {
  const throttledFunction = useCallback(throttle(callback, wait), []);
  return [throttledFunction];
};

/*  _Usage

import { useThrottledCallback } from "lib";

const [throttleHandler] = useThrottledCallback(value => function(value), wait);

const eventHandler = useCallback(e => {
    throttleHandler(e || value);
    },
    [throttleHandler]
);

*/
