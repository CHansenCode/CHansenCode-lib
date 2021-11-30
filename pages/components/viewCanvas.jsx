import { useState } from 'react';

import { Canvas } from 'components';

export default function ViewCanvas() {
  const draw = (ctx, frameCount) => {
    const radius = 60;
    const circle = {
      x: 100,
      y: 100,
      r: radius,
      start: 0,
      end: radius * 2 * Math.PI,
    };
    //
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'transparent';
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, circle.start, circle.end);
    ctx.fill();
    ctx.stroke();
  };

  return (
    <div>
      <div
        className="storyView"
        style={{
          position: 'relative',
          height: '800px',
          width: '800px',
          border: 'thin dashed black',
          overflow: 'hidden',
        }}
      >
        <Canvas draw={draw} />
      </div>
    </div>
  );
}
