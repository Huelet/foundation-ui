# Component creation
Here's a guide to help you (myself, really) get started with creating a component.

Create a new file with the name of the component or something similar in the `src/core` directory. **It must be typescript react**.

A new component should **always** include the following imports and jsx settings:
```jsx
/* eslint-disable no-unused-vars */
/// <reference types="@emotion/react/types/css-prop" />
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
```

It should also always export **both** an interface and a component:

```jsx
export interface ExampleProps {
    // If you don't need any props, use react default props instead, like this:
    props: React.ElementProps;
}
```
After that, create a function with the name of the component and export it:

```jsx
export const Example = ({props}: ExampleProps) => {
    return (
        // (Hint: Use prettier and ESLint to format your code!)
        <div
            css={css`
                width: 100%;
                height: 100%;
            `}
            {...props}
        ></div>
    );
}
```
Remember: keep your code clean and readable!
Don't import anything you don't need.