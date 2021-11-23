import { useState, useEffect } from 'react';

import { Button, Form, Item, List } from 'chansencode-lib';
import { ComponentView } from '@/Layout/ComponentView/ComponentView';

//domain
import { Section } from '@/components';
//components
import { Hamburger, Logo, Dropdown } from '@/components';

export default function Home({ colors }) {
  const [ternary, setTernary] = useState(false);
  return (
    <>
      <div className="spacer" />
      <Section>
        <ComponentView
          data={{
            title: 'Hamburger',
            descr: 'Hamburger component',
            properties: [
              { key: 'ternary', type: 'ternary' },
              { key: 'size', type: 'string', descr: 'inline height & width' },
              { key: 'id', type: 'string' },
              { key: 'className', type: 'string' },
              { key: 'onClick', type: 'string' },
            ],
          }}
        >
          <Hamburger
            ternary={ternary}
            size="3rem"
            onClick={() => setTernary(!ternary)}
          />
        </ComponentView>
      </Section>
      <Section>
        <ComponentView
          data={{
            title: 'Logo',
            descr: 'ChansenDesign svg-logo',
            properties: [
              { key: 'height', type: 'string' },
              { key: 'width', type: 'string' },
              {
                key: 'colors',
                type: '{primary: string (defaults to "teal"), secondary: string (defaults to "coral")}',
              },
            ],
          }}
        >
          <Logo width="300px" />
        </ComponentView>
      </Section>
      <Section>
        <ComponentView
          data={{
            title: 'Dropdown',
            descr: 'Dropdown menu button',
            properties: [
              { key: 'title', type: 'string' },
              { key: 'children', type: 'components' },
            ],
          }}
        >
          <Dropdown>
            <p>example1</p>
          </Dropdown>
        </ComponentView>
      </Section>
    </>
  );
}
