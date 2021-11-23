# Introduction

Component development environment.

View built on 'next.js',
exports handled with 'rollup.js'

<br>

## Installation

---

```
npm install
```

## Run

---

```javascript
npm run dev:        Starts dev env on 'localhost:3500'
npm run build:      Builds next static site to folder './out'
npm run build-lib:  Rollup compiles './components' to './dist'
```

<br>

## Motivation & Manifest

---

This program is built by a junior front-end web dev for consumption in various applications ranging from cms to web based interfaces. It comprises both view, presentation, simple & advanced components. This library will be built into .tsx with time but is for now written in .js format.

<br>

### 'Component design' - manifest

All components shall:

- K I S S
- Be able to render monochromatically following currentColor convention
- Documented clearly with example on lib.chansen.design

## List of components

---

| **name**  | **type**     |     |
| --------- | ------------ | --- |
| Button    | presentation |     |
| Hamburger | presentation |     |
| Logo      | presentation |     |

Explicit details and preview examples can be found on : ***https://lib.chansen.design***

<br>

## Folder Structure

---

<br>

### Exporting Components:

```javascript
//Target for rollup

file: '~/components/index.js';

export * from './Foo';
export * from './Bar';
```

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

### Importing Components

```javascript
import { Foo, Bar } from '~/components';

//or

import { Foo, Bar } from 'chansencode-lib';
```

<br>
