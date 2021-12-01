import React, { useState, useEffect } from 'react';
import useCanvas from 'lib/useCanvas';

export const Canvas = props => {
  const [size, setSize] = useState({
    height: 200,
    width: 200,
  });
  //
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

  console.log(canvasRef);

  useEffect(() => {
    function resizeCanvasToDisplaySize(canvas) {
      const { width, height } = canvas.getBoundingClientRect();

      console.log(canvas.height);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
      }

      return false;
    }
    resizeCanvasToDisplaySize(canvasRef);
  }, [canvasRef]);

  return (
    <canvas height={size.height} width={size.width} ref={canvasRef} {...rest} />
  );
};
