import { useState, useEffect } from 'react';

//domain
import { Section } from 'components/DOMAIN';

export default function Home({ colors }) {
  const [ternary, setTernary] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="spacer" />
      {/* HAMBURGER */}
      <Section>
        <h3 className="sc">welcome</h3>

        <h5>
          This is a browsable component library for the npm package
          chansencode-lib. It is designed in junction to be consumed by a
          cms/website package. The components are following a strict black/white
          or pc/sc/bg pattern that is referenced by classNames:
          <br />
          <br /> {`className="pc"`}
          <br /> {`className="sc"`}
          <br /> {`className="bg"`}
          <br />
          <br />
          The colors are managed by a compiler in the Layout.js and can be
          adjusted in the right side of the header.
          <br />
          <br />
        </h5>
        <h4>Please pick a component in the header menu to start browsing</h4>
      </Section>
    </>
  );
}
