import { useState, useEffect } from 'react';

import { ComponentView } from '@/Layout/ComponentView/ComponentView';

//domain
import { Section } from '@/components';
//components
import {
  Hamburger,
  Logo,
  Loading,
  Textarea,
  Input,
  Button,
} from '@/components';

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
              { key: 'required', type: 'boolean' },
            ],
          }}
        >
          <Textarea
            label="username label"
            placeholder="placeholder"
            info="min. 2 characters. No special chars "
            required
          />
        </ComponentView>
      </Section>
      <Section>
        <ComponentView
          data={{
            title: 'Input',
            descr: 'Standard Textarea with css inline, 100% width.',
            properties: [
              { key: 'label', type: 'string' },
              { key: 'placeholder', type: 'string' },
              { key: 'info', type: 'string' },
              { key: 'name', type: 'string' },
              { key: 'id', type: 'string' },
              { key: 'className', type: 'string' },
              { key: 'style', type: '{object}' },
              { key: 'value', type: 'string' },
              { key: 'onChange', type: 'string' },
              { key: 'required', type: 'boolean' },
            ],
          }}
        >
          <Input
            label="username label"
            placeholder="placeholder"
            info="min. 2 characters. No special chars "
          />
        </ComponentView>
      </Section>
      <Section>
        <ComponentView
          data={{
            title: 'Button',
            descr:
              'Standard Button monochromatic, noClick prop toggles pointer-events',
            properties: [
              { key: 'id', type: 'string' },
              { key: 'className', type: 'string' },
              { key: 'style', type: 'string' },
              { key: 'onClick', type: 'function' },
              { key: '', type: '' },
              { key: 'size', type: 'string' },
              { key: 'fontSize', type: 'string' },
              { key: 'margin', type: 'string' },
              { key: 'padding', type: 'string' },
              { key: 'color', type: 'string' },
              { key: 'border', type: 'string' },
              { key: 'borderRadius', type: 'string' },
              { key: 'bg', type: 'string' },
              { key: 'boxShadow', type: 'string' },

              { key: 'noClick', type: 'boolean' },
            ],
          }}
        >
          <Button
            fontSize="2rem"
            padding="2rem 4rem"
            children={ternary ? 'example text' : 'text example'}
            onClick={() => setTernary(!ternary)}
          />
        </ComponentView>
      </Section>
    </>
  );
}
