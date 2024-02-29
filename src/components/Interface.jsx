import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router";
import CampaignDetails from "./CampaignDetails";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/campaignSlice";
import Index from "./account";

const Interface = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/campaign/:id" element={<CampaignDetails />} />
          <Route path="/" element={<Main />} />
          <Route path="/account" element={<Index />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Interface;
