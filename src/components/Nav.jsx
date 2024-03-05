import { Link } from "react-router-dom";
import gsap from "gsap";

const Nav = ({ h1Ref }) => {
  const onClick = () => {
    console.log("onClick", h1Ref);
    gsap.to(h1Ref.current, {
      backgroundColor: "red",
      duration: 5,
      onComplete: () => {},
    });
  };

  return (
    <>
      <button onClick={onClick}>Set H1 red from child!</button>
      <Link to="/">Home</Link> <Link to="/account">Account</Link>
    </>
  );
};

export default Nav;
