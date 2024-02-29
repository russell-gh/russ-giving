import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  selectCampaignData,
  selectMessage,
  setCampaignData,
  setMessage,
} from "./redux/campaignSlice";
import Interface from "./components/Interface";
import "./css/App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const campaignData = useSelector(selectCampaignData);

  useEffect(() => {
    console.log("UE Ran", message);
    if (!message) return;

    toast(message);

    setTimeout(() => {
      dispatch(setMessage(""));
    }, 300);
  }, [message]);

  const getIntialCampaigns = async () => {
    const { data } = await axios.get(
      `https://api.justgiving.com/d81a1396/v1/fundraising/autocomplete`
    );

    data.Results.forEach((element, index) => {
      element.id = index;
      element.supporters = Math.floor(Math.random() * 50);
      element.required = Math.floor(Math.random() * 9000);
      element.contributed = Math.floor(Math.random() * element.required);
    });

    dispatch(setCampaignData(data.Results));
  };

  useEffect(() => {
    if (!campaignData) {
      getIntialCampaigns();
    }
  }, []);

  return (
    <>
      <Interface />
      <ToastContainer />
    </>
  );
};

export default App;
