import { useSelector } from "react-redux";
import { selectCampaignData, selectSearchTerm } from "../redux/campaignSlice";
import CampaignResults from "./CampaignResult";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Search from "./Search";

const Main = () => {
  const campaignData = useSelector(selectCampaignData);
  const searchTerm = useSelector(selectSearchTerm);

  if (!campaignData) {
    return <p>Loading...</p>;
  }

  let filtered = [...campaignData];
  if (searchTerm) {
    filtered = filtered.filter((campaign) => {
      const searchTermLC = searchTerm.toLowerCase();

      return (
        campaign.PageName.toLowerCase().includes(searchTermLC) ||
        campaign.PageOwner.toLowerCase().includes(searchTermLC) ||
        campaign.EventName.toLowerCase().includes(searchTermLC)
      );
    });
  }

  return (
    <>
      <Search />

      <div className="searchResults">
        {filtered.map((campaign) => {
          return <CampaignResults key={campaign.id} campaign={campaign} />;
        })}
      </div>
    </>
  );
};

export default Main;
