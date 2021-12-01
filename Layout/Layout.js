import React, { useState, useEffect } from 'react';

import Head from 'next/head';

import Header from './Header/Header';

import { Modal } from 'components/DEVELOPMENT';

import css from './Layout.module.scss';

const Layout = ({ children }) => {
  //#region color management
  const [colors, setColors] = useState({
    darkmode: false,
    dark: {
      pc: { r: 65, g: 170, b: 190, a: 1 },
      sc: { r: 245, g: 160, b: 145, a: 1 },
      bg: { r: 10, g: 50, b: 70, a: 1 },
    },
    light: {
      pc: { r: 65, g: 170, b: 190, a: 1 },
      sc: { r: 245, g: 160, b: 145, a: 1 },
      bg: { r: 250, g: 250, b: 250, a: 1 },
    },
    pc: '',
    sc: '',
    bg: '',
    pc05: '',
    pc1: '',
    pc3: '',
    pc5: '',
    pc7: '',
    sc05: '',
    sc1: '',
    sc3: '',
    sc5: '',
    sc7: '',
  });

  useEffect(() => {
    let compiledColors = {
      pc: '',
      sc: '',
      bg: '',
      pc05: '',
      pc1: '',
      pc3: '',
      pc5: '',
      pc7: '',
      sc05: '',
      sc1: '',
      sc3: '',
      sc5: '',
      sc7: '',
    };

    colors.darkmode
      ? (compiledColors = {
          pc: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, ${colors.dark.pc.a})`,
          sc: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, ${colors.dark.sc.a})`,
          bg: `rgba(${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}, ${colors.dark.bg.a})`,
          pc05: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.05)`,
          pc1: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.1)`,
          pc3: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.3)`,
          pc5: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.5)`,
          pc7: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.7)`,
          sc05: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.05)`,
          sc1: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.1)`,
          sc3: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.3)`,
          sc5: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.5)`,
          sc7: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.7)`,
        })
      : (compiledColors = {
          pc: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, ${colors.light.pc.a})`,
          sc: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, ${colors.light.sc.a})`,
          bg: `rgba(${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}, ${colors.light.bg.a})`,
          pc05: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.05)`,
          pc1: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.1)`,
          pc3: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.3)`,
          pc5: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.5)`,
          pc7: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.7)`,
          sc05: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.05)`,
          sc1: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.1)`,
          sc3: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.3)`,
          sc5: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.5)`,
          sc7: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.7)`,
        });

    setColors({
      ...colors,
      ...compiledColors,
    });
  }, [
    colors.dark.pc,
    colors.dark.sc,
    colors.dark.bg,
    colors.light,
    colors.darkmode,
  ]);
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
            color: ${colors && colors.pc};
          }
          .sc {
            color: ${colors && colors.sc};
          }
          .bg {
            background: ${colors && colors.bg};
          }

          .pc1 {
            color: ${colors && colors.pc1};
          }
          .pc3 {
            color: ${colors && colors.pc3};
          }
          .pc5 {
            color: ${colors && colors.pc5};
          }
          .pc7 {
            color: ${colors && colors.pc7};
          }
          .sc1 {
            color: ${colors && colors.sc1};
          }
          .sc3 {
            color: ${colors && colors.sc3};
          }
          .sc5 {
            color: ${colors && colors.sc5};
          }
          .sc7 {
            color: ${colors && colors.sc7};
          }

          .pcbg {
            background: ${colors && colors.pc};
          }
          .pc05bg {
            background: ${colors && colors.pc05};
          }
          .pc1bg {
            background: ${colors && colors.pc1};
          }
          .pc3bg {
            background: ${colors && colors.pc3};
          }
          .scbg {
            background: ${colors && colors.sc};
          }
          .sc05bg {
            background: ${colors && colors.sc05};
          }
          .sc1bg {
            background: ${colors && colors.sc1};
          }
          .sc3bg {
            background: ${colors && colors.sc3};
          }

          .pc05b {
            border: thin solid ${colors && colors.pc05} !important;
          }
          .pc1b {
            border: thin solid ${colors && colors.pc1} !important;
          }
          .pc3b {
            border: thin solid ${colors && colors.pc3} !important;
          }
          .sc05b {
            border: thin solid ${colors && colors.sc05} !important;
          }
          .sc1b {
            border: thin solid ${colors && colors.sc1} !important;
          }
          .sc3b {
            border: thin solid ${colors && colors.sc3} !important;
          }
        `}
      </style>
      <style jsx global>
        {`
          a {
            color: ${colors && colors.pc};
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
            color: ${colors.pc};
            background: ${colors.bg};
          }
        `}
      </style>
    </>
  );
};

export default Layout;
