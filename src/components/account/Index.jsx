import { useSelector } from "react-redux";
import Signup from "./Signup";
import {
  selectLoggedIn,
  selectScreen,
  setScreen,
} from "../../redux/accountSlice";
import Login from "./Login";
import { useDispatch } from "react-redux";
import Dashboard from "./Dashboard";

const Index = () => {
  const screen = useSelector(selectScreen);
  const loggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      {!loggedIn && (
        <>
          <button
            onClick={() => {
              dispatch(setScreen(0));
            }}
          >
            Signup
          </button>
          <button
            onClick={() => {
              dispatch(setScreen(1));
            }}
          >
            Login
          </button>
        </>
      )}

      {screen === 0 && <Signup />}
      {screen === 1 && <Login />}
      {screen === 2 && <Dashboard />}

      {screen === 0 ? (
        <Signup />
      ) : screen === 1 ? (
        <Login />
      ) : screen === 2 ? (
        <p></p>
      ) : screen === 3 ? (
        <p></p>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Index;
