import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router";
import CampaignDetails from "./CampaignDetails";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/campaignSlice";

const Interface = () => {
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <Header />
        <button
          onClick={() => {
            dispatch(setMessage("Hello from the Interface component"));
          }}
        >
          Click me
        </button>
      </header>
      <main>
        <Routes>
          <Route path="/campaign/:id" element={<CampaignDetails />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Interface;
