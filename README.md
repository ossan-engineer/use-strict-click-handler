# use-strict-click-handler

>

[![NPM](https://img.shields.io/npm/v/use-strict-click-handler.svg)](https://www.npmjs.com/package/use-strict-click-handler)

## Install

```bash
npm install --save use-strict-click-handler
```

## Usage

```tsx
import * as React from "react";
import { handlers } from "use-strict-click-handler";

const Example = () => {
  const { handlers } = useStrictClickHandler(() =>
    console.log("STRICT CLICKED!")
  );
  return (
    <>
      <div className="App" {...handlers}>
        <h1>STRICT CLICK</h1>
        <ol>
          <li>Open console.</li>
          <li>Click or drag inside this component.</li>
          <li>Drag events are excluded.</li>
        </ol>
      </div>
      <div className="App" onClick={() => console.log("NORMAL CLICKED!")}>
        <h1>NORMAL CLICK</h1>
        <ol>
          <li>Open console.</li>
          <li>Click or drag inside this component.</li>
          <li>Drag events are included.</li>
        </ol>
      </div>
    </>
  );
};
```

## Demo

http://odd-aunt.surge.sh/

## License

MIT © [ossan-engineer](https://github.com/ossan-engineer)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
