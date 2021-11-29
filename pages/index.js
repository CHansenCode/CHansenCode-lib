import { useState, useEffect } from 'react';

import { ComponentView } from '@/Layout/ComponentView/ComponentView';

//domain
import { Section } from '@/components';
//components
import {
  Hamburger,
  Logo,
  Loading,
  //
  Form,
  Input,
  Textarea,
  //
  LayeredImage,
  //
  List,
  Item,
  //
  Button,
  Image,
  Modal,
} from '@/components';

export default function Home({ colors }) {
  const [ternary, setTernary] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="spacer" />
      {/* HAMBURGER */}
      <Section>
        <ComponentView
          data={{
            title: 'Hamburger',
            descr: 'Hamburger component',
            properties: [
              { key: 'ternary', type: 'boolean' },
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
          <Logo width="300px" pc={colors.strings.pc} sc={colors.strings.sc} />
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
      {/* INPUT,TEXTAREA,FORM */}
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
              { key: 'rows', type: 'Number' },
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
            title: 'Form',
            descr:
              'Form Container, has e.preventDefault() as onSubmit unless onSubmit prop is passed',
            properties: [
              { key: 'id', type: 'string' },
              { key: 'className', type: 'string' },
              { key: 'style', type: 'string' },

              { key: 'width', type: 'string' },

              { key: 'margin', type: 'string' },
              { key: 'padding', type: 'string' },
              { key: 'border', type: 'string' },

              { key: 'bg', type: 'string' },
              { key: 'children', type: 'string/component' },
            ],
          }}
        >
          <Form>
            <h4 className="sc">Form is only a wrapper</h4>
            <Input />
            <Textarea />
            <Button width="100%" children="send" />
          </Form>
        </ComponentView>
      </Section>
      {/* BUTTON */}
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
            fontSize="1rem"
            children={ternary ? 'example text' : 'text example'}
            onClick={() => setTernary(!ternary)}
          />
        </ComponentView>
      </Section>
      <Section>
        <ComponentView
          data={{
            title: 'Image',
            descr:
              'Form Container, has e.preventDefault() as onSubmit unless onSubmit prop is passed',
            properties: [{ key: 'id', type: 'string' }],
          }}
        >
          <Image />
        </ComponentView>
      </Section>
      <Section>
        <ComponentView
          data={{
            title: 'List & Item',
            descr: '',
            properties: [
              { key: 'for BOTH', type: '' },
              { key: 'id', type: 'string' },
              { key: 'className', type: 'string' },
              { key: 'style', type: '{object}' },
              { key: 'children', type: 'any' },

              { key: '', type: '' },
              { key: 'for ITEM', type: '' },
              { key: 'onClick', type: 'func' },
            ],
          }}
        >
          <List>
            <Item children="Child 1" />
            <Item children="Child 2" />
            <Item children="Child 3" />
            <Item children="Child 4" />
          </List>
        </ComponentView>
      </Section>
      <Section>
        <ComponentView
          data={{
            title: 'Modal',
            descr: 'z: 100, below nav because of relative Section component',
            properties: [
              { key: 'center', type: 'string' },
              { key: 'column', type: 'string' },
              { key: 'ternary', type: 'boolean' },

              { key: 'id', type: 'string' },
              { key: 'className', type: 'string' },
              { key: 'children', type: 'any' },
              { key: 'onClose', type: 'func' },
            ],
          }}
        >
          <Modal ternary={modal} onClose={() => setModal(false)}>
            <p>
              Toggle modal at top level to avoid hierarchy confusion (visible
              nav)
            </p>
          </Modal>
          <Button children={'open modal'} onClick={() => setModal(true)} />
        </ComponentView>
      </Section>
      <Section>
        <ComponentView
          data={{
            title: 'LayeredImage',
            descr: 'ImageViewer with depth distortion',
            properties: [{ key: 'imgArray', type: '["https://sauce"]' }],
          }}
        >
          <LayeredImage />
        </ComponentView>
      </Section>
    </>
  );
}
