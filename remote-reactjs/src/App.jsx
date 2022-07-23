import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Add from "./Add";
import Photo from "./Photo";

const App = () => (
  <div className="mt-10 text-xl mx-auto max-w-6xl">
    <Add />
    <Photo />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
