import React, { useRef, useEffect } from "react";
import { mount } from "remoteVueJsApp/HelloVueApp";

export default function VueJsAppPage() {
  const vueJsAppRef = useRef(null);

  useEffect(() => {
    mount(vueJsAppRef.current);
  }, []);

  return <div ref={vueJsAppRef}></div>;
}
