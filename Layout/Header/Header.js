import { GiYinYang } from 'react-icons/gi';
import { Button, ColorPicker } from 'components';
import { NextLink } from 'components/DEVELOPMENT';
import { Dropdown } from '@/components/DOMAIN';

import css from './Header.module.scss';

import { navigation, meta } from '@/config';

const Header = ({ className, colors, setColors }) => {
  function handlePrimaryChange(color) {
    const newDark = { ...colors.dark, pc: color.rgb };
    const newLight = { ...colors.light, pc: color.rgb };

    colors.darkmode
      ? setColors({ ...colors, dark: newDark })
      : setColors({ ...colors, light: newLight });
  }
  function handleSecondaryChange(color) {
    const newDark = { ...colors.dark, sc: color.rgb };
    const newLight = { ...colors.light, sc: color.rgb };

    colors.darkmode
      ? setColors({ ...colors, dark: newDark })
      : setColors({ ...colors, light: newLight });
  }
  function handleBgChange(color) {
    const newDark = { ...colors.dark, bg: color.rgb };
    const newLight = { ...colors.light, bg: color.rgb };

    colors.darkmode
      ? setColors({ ...colors, dark: newDark })
      : setColors({ ...colors, light: newLight });
  }

  return (
    <>
      <header className={`${className} ${css.header} pc pc3b`}>
        <nav id="nav" className="pc">
          <NextLink href="/">
            <h4 className={`${css.logo} sc`}>{meta.projectName}</h4>
          </NextLink>

          <Dropdown title="Menu">
            <div className={css.navLink_wrapper}>
              {navigation.map(route => (
                <NextLink key={route.title} href={route.route}>
                  <h5 className={css.navLink}>{route.title}</h5>
                </NextLink>
              ))}
            </div>
          </Dropdown>

          <div className={css.colorPickers}>
            <Button
              children={<GiYinYang size="1.5rem" />}
              onClick={() =>
                setColors({ ...colors, darkmode: !colors.darkmode })
              }
            ></Button>
            <ColorPicker
              colorName="PC"
              color={colors.darkmode ? colors.dark.pc : colors.light.pc}
              onChangeComplete={handlePrimaryChange}
            />
            <ColorPicker
              colorName="SC"
              color={colors.darkmode ? colors.dark.sc : colors.light.sc}
              onChangeComplete={handleSecondaryChange}
            />
            <ColorPicker
              colorName="BG"
              color={colors.darkmode ? colors.dark.bg : colors.light.bg}
              onChangeComplete={handleBgChange}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
