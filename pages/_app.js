import { useState, useEffect } from 'react';

import '../styles/style.scss';

import Layout from '../Layout/Layout';

function MyApp({ Component, pageProps }) {
  const [colors, setColors] = useState({
    darkmode: false,
    dark: {
      pc: { r: 150, g: 200, b: 220, a: 1 },
      sc: { r: 200, g: 150, b: 150, a: 1 },
      bg: { r: 10, g: 50, b: 70, a: 1 },
    },
    light: {
      pc: { r: 50, g: 120, b: 140, a: 1 },
      sc: { r: 230, g: 80, b: 50, a: 1 },
      bg: { r: 250, g: 250, b: 250, a: 1 },
    },
  });

  //#region listen to color changes & update string

  //#endregion

  return (
    <>
      <Layout colors={colors} setColors={setColors}>
        <Component colors={colors} {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
