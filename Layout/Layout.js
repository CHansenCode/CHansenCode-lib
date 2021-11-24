import { useState } from 'react';

import Head from 'next/head';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Modal } from '@/components';

import css from './Layout.module.scss';

const Layout = ({ colors, setColors, children }) => {
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

      <Header className={css.header} colors={colors} setColors={setColors} />
      <main
        id="main_view"
        className={`${css.main} pc`}
        style={{ color: colors.primaryString }}
      >
        {children}
      </main>

      {/* <Footer className={css.footer} /> */}

      <style jsx global>
        {`
          #main_view {
            background: rgba(
              ${colors.darkmode ? colors.dark.bg.r : colors.light.bg.r},
              ${colors.darkmode ? colors.dark.bg.g : colors.light.bg.g},
              ${colors.darkmode ? colors.dark.bg.b : colors.light.bg.b},
              ${colors.darkmode ? colors.dark.bg.a : colors.light.bg.a}
            );
          }
        `}
      </style>
      <style jsx global>
        {`
          .pc {
            color: rgba(
              ${colors.darkmode ? colors.dark.pc.r : colors.light.pc.r},
              ${colors.darkmode ? colors.dark.pc.g : colors.light.pc.g},
              ${colors.darkmode ? colors.dark.pc.b : colors.light.pc.b},
              ${colors.darkmode ? colors.dark.pc.a : colors.light.pc.a}
            );
          }
          .sc {
            color: rgba(
              ${colors.darkmode ? colors.dark.sc.r : colors.light.sc.r},
              ${colors.darkmode ? colors.dark.sc.g : colors.light.sc.g},
              ${colors.darkmode ? colors.dark.sc.b : colors.light.sc.b},
              ${colors.darkmode ? colors.dark.sc.a : colors.light.sc.a}
            );
          }
          .pcbg {
            background: rgba(
              ${colors.darkmode ? colors.dark.bg.r : colors.light.bg.r},
              ${colors.darkmode ? colors.dark.bg.g : colors.light.bg.g},
              ${colors.darkmode ? colors.dark.bg.b : colors.light.bg.b},
              ${colors.darkmode ? colors.dark.bg.a : colors.light.bg.a}
            );
          }
        `}
      </style>
    </>
  );
};

export default Layout;
