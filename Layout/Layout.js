import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Header from './Header/Header';

import { Modal } from 'components/DEVELOPMENT';
import { useColors } from 'lib';

import css from './Layout.module.scss';

const Layout = ({ children }) => {
  const { colors, setColors } = useColors();

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
