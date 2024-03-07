import { Link } from "react-router-dom";
import gsap from "gsap";

const Nav = () => {
  return (
    <>
      <Link to="/">Home</Link> <Link to="/account">Account</Link>
    </>
  );
};

export default Nav;
