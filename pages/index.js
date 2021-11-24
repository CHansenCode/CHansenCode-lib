import { useState, useEffect } from 'react';

import { ComponentView } from '@/Layout/ComponentView/ComponentView';

//domain
import { Section } from '@/components';
//components
import { Hamburger, Logo, Loading, Textarea } from '@/components';

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
            descr: `CHansenDesign logo. Only accepts strings for colors`,
            properties: [
              { key: 'height', type: 'string' },
              { key: 'width', type: 'string' },
              {
                key: 'colors',
                type: '{primary, secondary}',
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
            title: 'Loading',
            descr: 'Minimal loading indicator, scales with "rem"',
            properties: [
              { key: 'text', type: 'string' },
              { key: 'fontSize', type: 'string' },
            ],
          }}
        >
          <Loading />
        </ComponentView>
      </Section>
      <Section>
        <ComponentView
          data={{
            title: 'Textarea',
            descr: 'Standard Textarea with css inline, 100% width.',
            properties: [
              { key: 'label', type: 'string' },
              { key: 'placeholder', type: 'string' },
              { key: 'info', type: 'string' },
              { key: 'name', type: 'string' },
              { key: 'id', type: 'string' },
              { key: 'className', type: 'string' },
              { key: 'style', type: '{object}' },
              { key: 'rows', type: 'string' },
              { key: 'value', type: 'string' },
              { key: 'onChange', type: 'string' },
            ],
          }}
        >
          <Textarea
            label="username label"
            placeholder="placeholder"
            info="min. 2 characters. No special chars "
          />
        </ComponentView>
      </Section>
    </>
  );
}
