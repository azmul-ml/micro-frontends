import { render } from "solid-js/web";

import "./index.scss";
import Counter from "./Counter";
import User from "./User";

const App = () => (
  <div class="mt-10 text-xl mx-auto max-w-6xl">
    <Counter />
    <User />
  </div>
);
render(App, document.getElementById("app"));
