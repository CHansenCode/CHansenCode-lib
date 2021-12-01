import { useState } from 'react';
import { ChromePicker } from 'react-color';

import css from './ColorPicker.module.scss';

export const ColorPicker = ({ color, onChangeComplete, colorName }) => {
  const [open, setOpen] = useState(false);

  let string = color && `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

  return (
    <div className={css.colorPicker}>
      <h5>{colorName}:</h5>

      <div
        style={{ background: string }}
        className={`pc3b ${css.shower}`}
        onClick={() => setOpen(!open)}
      />

      <div className={css.picker}>
        {open && (
          <>
            <div
              style={{ padding: '0.5rem' }}
              onMouseLeave={() => setOpen(false)}
            >
              <ChromePicker color={color} onChangeComplete={onChangeComplete} />
              <button
                onClick={() => setOpen(!open)}
                style={{
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                  color: color,
                  border: 'thin solid currentColor',
                }}
              >
                close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// style={{ marginRight: '1rem', display: 'flex', alignItems: 'center' }}

// const inline = {
//     height: '1.5rem',
//     width: '1.5rem',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     pickerWrapper: {
//       position: 'absolute',
//       top: '4rem',
//       right: '0',
//     },
//   };
