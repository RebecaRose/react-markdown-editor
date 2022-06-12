# React Markdown Editor

React Markdown is available as an [npm package](https://www.npmjs.com/package/@rebecarose/react-markdown-editor "npm package").
## Installation

```
- with npm
npm install @rebecarose/react-markdown-editor

- with yarn
yarn add @rebecarose/react-markdown-editor
```

## Getting started with React Markdown Editor

View the [Demo](https://rebecarose.github.io/react-markdown-editor "Demo") and its source for more.
```
import React, {useState} from 'react';
import { MarkdownEditor } from '@rebecarose/react-markdown-editor';


const App = () => {
    const [value, setValue] = useState('');
    return (
        <MarkdownEditor
            value={value}
            onChange={e => setValue(e)}
        />
    )
}
```
