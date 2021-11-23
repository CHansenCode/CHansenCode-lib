# Introduction

Component library for ChansenCode environment

<br>

## Installation

---

```
npm install
```

<br>

## List of components

## Next

---

<br>

```javascript
file: '~/pages/app.js'

<div id="__next">
  <Layout>
    <Component {...pageProps} />
  </Layout>
</div>
```

```javascript
file: '~/Layout/Layout.js'

<Head />

<Header></Header>
{children}
<Footer></Footer>
```

## Component structure

---

_All components are exported from index.js_

```javascript
file: '~/components/index.js';

export * from './Foo';
export * from './Bar';
//...for all components
```

<br>
_Component_

```javascript
file: '~/components/Foo/index.js';

export * from './Foo';
```

```javascript
file: '~/components/Foo/Foo.js';

export const Foo = () => {
  return (
    <div>
      <h4>foo</h4>
    </div>
  );
};
```

<br>

_To import components in Pages/compositions_

```javascript
import { Foo, Bar } from '~/components';
```

<br>
