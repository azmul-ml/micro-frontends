import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

import App from "./App";
import VueJsPage from "./VueJsPage";
import ReactJsPage from "./ReactJsPage";
import SolidJsPage from "./SolidJsPage";
import Navbar from "./Navbar";

const Bootstrap = () => {
  return (
    <div className="mt-10 text-xl mx-auto max-w-6xl">
      <h1 className="text-3xl text-center">Host App: ReactJS</h1>
      <hr />
      <br />
      <BrowserRouter>
        <Navbar />
        <br />
        <Routes>
          <Route index element={<App />} />
          <Route path="/vue" element={<VueJsPage />} />
          <Route path="/react" element={<ReactJsPage />} />
          <Route path="/solid" element={<SolidJsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
ReactDOM.render(<Bootstrap />, document.getElementById("bootstrap"));
