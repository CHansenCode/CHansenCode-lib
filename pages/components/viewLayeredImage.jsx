import { useState } from 'react';

import { LayeredImage, Section, Button, Input, List, Item } from 'components';

export default function ViewCanvas() {
  const [values, setValues] = useState({
    distortion: 40,
  });
  return (
    <>
      <Section center minHeight="100vh">
        <div className="wrapper">
          <div id="view_prop_menu">
            <Button children="distortion" />
            <Input
              label="distortion"
              value={values.distortion}
              onChange={e =>
                setValues({ ...values, distortion: e.target.value })
              }
            />
          </div>
          <div className="wrapper_layered">
            <LayeredImage distortMax={values.distortion} overflow={false}>
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
              <div className="sc rectangle_layered" />
            </LayeredImage>
          </div>
        </div>
      </Section>

      <style jsx>
        {`
          .wrapper {
            display: grid;
            grid-template: 'a b' 1fr / auto 1fr;
            grid-gap: 2rem;
          }
          .wrapper_layered {
            height: 60vh;
            width: 40vw;
            border: thin solid;
            box-shadow: 0 0 3rem -1rem currentColor;
          }
          .rectangle_layered {
            box-shadow: inset 0 0 3rem -1rem currentColor;
            border: thin solid red;
            height: 100%;
            width: 100%;
          }
          #view_prop_menu {
            border: thin solid;
            padding: 1rem;
            box-shadow: 0 0 3rem -1rem currentColor;
          }
        `}
      </style>
    </>
  );
}
