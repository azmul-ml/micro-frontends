import React, { useRef, useEffect } from "react";
import UserWrapper from "remoteSolidJsApp/UserWrapper";

export default function App() {
  const usersRef = useRef(null);

  useEffect(() => {
    UserWrapper(usersRef.current);
  }, []);

  return <div ref={usersRef}></div>;
}
