import React, { useState, useEffect } from 'react';

import Head from 'next/head';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Modal } from '@/components';

import css from './Layout.module.scss';

const Layout = ({ children }) => {
  //#region color management
  const [colors, setColors] = useState({
    darkmode: false,
    dark: {
      pc: { r: 80, g: 160, b: 200, a: 1 },
      sc: { r: 200, g: 150, b: 150, a: 1 },
      bg: { r: 10, g: 50, b: 70, a: 1 },
    },
    light: {
      pc: { r: 50, g: 120, b: 140, a: 1 },
      sc: { r: 230, g: 80, b: 50, a: 1 },
      bg: { r: 250, g: 250, b: 250, a: 1 },
    },
    strings: {
      pc: '',
      sc: '',
      bg: '',
      pc1: '',
      pc3: '',
      sc1: '',
      sc3: '',
    },
  });

  useEffect(() => {
    let compiledColor = {
      pc: '',
      sc: '',
      bg: '',
      pc1: '',
      pc3: '',
      sc1: '',
      sc3: '',
    };

    colors.darkmode
      ? (compiledColor = {
          pc: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, ${colors.dark.pc.a})`,
          sc: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, ${colors.dark.sc.a})`,
          bg: `rgba(${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}, ${colors.dark.bg.a})`,
          pc1: `rgba(${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}, 0.1)`,
          pc3: `rgba(${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}, 0.3)`,
          sc1: `rgba(${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}, 0.1)`,
          sc3: `rgba(${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}, 0.3)`,
        })
      : (compiledColor = {
          pc: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, ${colors.light.pc.a})`,
          sc: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, ${colors.light.sc.a})`,
          bg: `rgba(${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}, ${colors.light.bg.a})`,
          pc1: `rgba(${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}, 0.1)`,
          pc3: `rgba(${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}, 0.3)`,
          sc1: `rgba(${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}, 0.1)`,
          sc3: `rgba(${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}, 0.3)`,
        });

    setColors({
      ...colors,
      strings: compiledColor,
    });
  }, [colors.dark, colors.light, colors.darkmode]);
  //#endregion

  const [modals, setModals] = useState({
    testModal: false,
  });

  return (
    <>
      <Head>
        <title>Storybook-Next.js-template</title>
        <meta name="description" content="template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal
        ternary={modals.testModal}
        center
        onClose={() => setModals({ ...modals, testModal: false })}
      />

      <>
        <Header className={css.header} colors={colors} setColors={setColors} />
        <Main colors={colors} children={children} />
        {/* <Footer className={css.footer} /> */}
      </>

      <style jsx global>
        {`
          .pc {
            color: ${colors.strings.pc};
          }
          .sc {
            color: ${colors.strings.sc};
          }
          .bg {
            background: ${colors.strings.bg};
          }

          .pc1 {
            color: ${colors.strings.pc1};
          }
          .pc3 {
            color: ${colors.strings.pc3};
          }
          .sc1: {
            color: ${colors.strings.sc1};
          }
          .sc3 {
            color: ${colors.strings.sc3};
          }

          .pc1b {
            border-color: ${colors.strings.pc1} !important;
          }
          .pc3b {
            border-color: ${colors.strings.pc3} !important;
          }
          .sc1b {
            border-color: ${colors.strings.sc1} !important;
          }
          .sc3b {
            border-color: ${colors.strings.sc3} !important;
          }
        `}
      </style>
    </>
  );
};

const Main = ({ children, colors }) => {
  return (
    <>
      <main id="main_view" className={css.main}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            colors: colors,
          });
        })}
      </main>

      <style jsx>
        {`
          #main_view {
            color: ${colors.strings.pc};
            background: ${colors.strings.bg};
          }
        `}
      </style>
    </>
  );
};

export default Layout;
