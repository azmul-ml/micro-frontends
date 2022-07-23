import React, {useState} from "react"

export default () => {
  const [count, setCount] = useState(0);
  return(
    <>
      <div>Remote App #2: ReactJS</div>
      <div>Count = {count}</div>
      <button className="btn bg-green-500 p-2 btn-primary" onClick={() => setCount(count + 2)}>Add Two</button>
    </>
  )
}