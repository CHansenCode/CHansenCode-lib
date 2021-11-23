import { useState } from 'react';
import { ChromePicker } from 'react-color';

import { Dropdown, NextLink, Button } from '@/components';

import css from './Header.module.scss';

import { pageSetup, meta } from '@/config';

const Header = ({ className, colors, setColors }) => {
  function handlePrimaryChange(color, e) {
    colors.darkmode
      ? setColors({ ...colors, dark: { ...colors.dark, pc: color.rgb } })
      : setColors({ ...colors, light: { ...colors.light, pc: color.rgb } });
  }
  function handleSecondaryChange(color, e) {
    colors.darkmode
      ? setColors({ ...colors, dark: { ...colors.dark, sc: color.rgb } })
      : setColors({ ...colors, light: { ...colors.light, sc: color.rgb } });
  }
  function handleBgChange(color, e) {
    colors.darkmode
      ? setColors({ ...colors, dark: { ...colors.dark, bg: color.rgb } })
      : setColors({ ...colors, light: { ...colors.light, bg: color.rgb } });
  }

  return (
    <>
      <header className={`${className} ${css.header} pc`}>
        <nav id="nav" className="pc pcbg">
          <div
            style={{
              padding: '0 0 0 1rem',
              whiteSpace: 'nowrap',
            }}
          >
            {meta.projectName} - Component library
          </div>

          {/* <Dropdown>
            {pageSetup.map(page => (
              <NextLink key={page.name} href={page.pageRoute}>
                {page.name}
              </NextLink>
            ))}
          </Dropdown> */}

          <div className={css.colorPickers}>
            <ColorPicker
              colorName="Primary"
              color={colors.darkmode ? colors.dark.pc : colors.light.pc}
              onChangeComplete={handlePrimaryChange}
            />
            <ColorPicker
              colorName="Secondary"
              color={colors.darkmode ? colors.dark.sc : colors.light.sc}
              onChangeComplete={handleSecondaryChange}
            />
            <ColorPicker
              colorName="Background"
              color={colors.darkmode ? colors.dark.bg : colors.light.bg}
              onChangeComplete={handleBgChange}
            />
            <Button
              text={colors.darkmode ? 'darkmode' : 'lightmode'}
              margin="0 1rem"
              onClick={() =>
                setColors({ ...colors, darkmode: !colors.darkmode })
              }
            />
          </div>
        </nav>
      </header>
    </>
  );
};

const ColorPicker = ({ color, onChangeComplete, colorName }) => {
  const [open, setOpen] = useState(false);
  const propStyle = {
    background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
  };
  const inline = {
    height: '1.5rem',
    width: '1.5rem',
    borderRadius: '50%',
    cursor: 'pointer',
    pickerWrapper: {
      position: 'absolute',
      top: '4rem',
      right: '0',
    },
  };
  return (
    <div style={{ marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
      <h5 style={{ margin: '0 0.5rem 0 0', padding: 0, color: color }}>
        {colorName}:
      </h5>
      <div onClick={() => setOpen(!open)} style={{ ...propStyle, ...inline }} />
      <div style={inline.pickerWrapper}>
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

export default Header;
