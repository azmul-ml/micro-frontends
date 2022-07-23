import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import CounterWrapper from "app1/CounterWrapper";
import Add from "app2/Add";
import { mount } from 'helloVue/HelloVueApp'

const App = () => {
  const divRef = useRef(null);
  const vueRef = useRef(null);

  useEffect(() => {
    CounterWrapper(divRef.current);
    mount(vueRef.current)
  }, []);

  return (
    <div className="mt-10 text-xl mx-auto max-w-6xl">
      <div>Host App: ReactJS</div>
      <hr />
      <br />
      <div ref={divRef}></div>
      <br />
      <Add />
      <br />
      <div ref={vueRef}></div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
