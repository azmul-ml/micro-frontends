import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex justify-center">
      <li className="mr-6">
        <Link className="text-blue-500 hover:text-blue-800" to="/">
          Home Page
        </Link>
      </li>
      <li className="mr-6">
        <Link className="text-blue-500 hover:text-blue-800" to="/react">
          ReactJSApp Page
        </Link>
      </li>
      <li className="mr-6">
        <Link className="text-blue-500 hover:text-blue-800" to="/solid">
          SolidJsApp Page
        </Link>
      </li>
      <li className="mr-6">
        <Link className="text-blue-500 hover:text-blue-800" to="/vue">
          VueJsApp Page
        </Link>
      </li>
    </ul>
  );
}
