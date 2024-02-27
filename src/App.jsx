import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCompaignData } from "./redux/campaignSlice";
import Interface from "./components/Interface";

const App = () => {
  const dispatch = useDispatch();

  const getIntialCompaigns = async () => {
    const { data } = await axios.get(
      `https://api.justgiving.com/d81a1396/v1/fundraising/autocomplete`
    );

    data.Results.forEach((element, index) => {
      element.id = index;
    });

    dispatch(setCompaignData(data.Results));
  };

  useEffect(() => {
    getIntialCompaigns();
  }, []);

  return <Interface />;
};

export default App;
