import { createSignal } from "solid-js"

export default () => {
  const [count, setCount] = createSignal(0);
  return(
    <div>
      <h1>Remote App #1: SolidJS</h1>
      <div>Count = {count()}</div>
      <button class="btn btn-primary bg-yellow-400 p-2"onClick={() => setCount(count() + 1)}>Add One</button>
    </div>
  )
}