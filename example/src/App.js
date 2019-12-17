import React from "react";
import "./App.css";

import useStrictClickHandler from "use-strict-click-handler";

const App = () => {
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
export default App;
