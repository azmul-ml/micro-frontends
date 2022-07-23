import React, { useRef, useEffect } from "react";
import CounterWrapper from "remoteSolidJsApp/CounterWrapper";
import Add from "remoteReactJsApp/Add";
import { mount } from "remoteVueJsApp/HelloVueApp";

export default function App() {
  const solidJsAppRef = useRef(null);
  const vueJsAppRef = useRef(null);

  useEffect(() => {
    CounterWrapper(solidJsAppRef.current);
    mount(vueJsAppRef.current);
  }, []);

  return (
    <div>
      <div ref={solidJsAppRef}></div>
      <br />
      <Add />
      <br />
      <div ref={vueJsAppRef}></div>
    </div>
  );
}
