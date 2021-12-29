import { useRef, useEffect } from 'react';

export const useResizeObserver = () => {
  const myRef = useRef(null);
  let width;

  useEffect(() => {
    const observer = new Observer(callback, options);
    return () => {};
  }, [myRef]);

  return [myRef, width];
};
