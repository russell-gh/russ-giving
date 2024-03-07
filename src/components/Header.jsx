import { useLayoutEffect, useEffect, useRef } from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div>
      <h1>Russ Giving</h1>
      <p>Please give money!</p>
      <Nav />
    </div>
  );
};

export default Header;
