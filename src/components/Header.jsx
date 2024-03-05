import { useLayoutEffect, useEffect, useRef } from "react";
import Nav from "./Nav";

const Header = () => {
  // useLayoutEffect(() => { //occurs post dom update but before paint
  //   gsap.to(h1Ref.current, { backgroundColor: "red", duration: 5 });
  // }, []);

  const h1Ref = useRef();

  return (
    <div>
      <h1 ref={h1Ref}>Russ Giving</h1>
      <p>Please give money!</p>
      <Nav h1Ref={h1Ref} />
    </div>
  );
};

export default Header;
