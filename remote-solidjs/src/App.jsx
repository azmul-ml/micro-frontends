import { render } from "solid-js/web";

import "./index.scss";
import Counter from "./Counter";

const App = () => (
  <div class="mt-10 text-xl mx-auto max-w-6xl">
    <Counter />
  </div>
);
render(App, document.getElementById("app"));
