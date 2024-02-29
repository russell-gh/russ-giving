import { createSlice } from "@reduxjs/toolkit";
import { saveStore, getStore } from "./diskUtils";

const initialState = {};

const diskData = getStore("campaign");

export const campaignSlice = createSlice({
  name: "campaign",
  initialState: diskData ? diskData : initialState,
  //murate the store > adding deleting editing
  reducers: {
    setCampaignData: (state, { payload }) => {
      state.campaignData = payload;
      saveStore("campaign", state);
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
      saveStore("campaign", state);
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
      saveStore("campaign", state);
    },
    updateExistingCampaign: (state, { payload }) => {
      const indexOf = state.campaignData.findIndex((campaign) => {
        return campaign.id === payload.id;
      });
      state.campaignData[indexOf].contributed += Number(payload.value);
      saveStore("campaign", state);
    },
  },
});

export const {
  setCampaignData,
  setSearchTerm,
  setMessage,
  updateExistingCampaign,
} = campaignSlice.actions;

//gets data from store
export const selectMessage = (state) => state.campaign.message;
export const selectCampaignData = (state) => state.campaign.campaignData;
export const selectSearchTerm = (state) => state.campaign.searchTerm;
export const selectSingleCampaign = (id) => (state) => {
  return state.campaign.campaignData.find((campaign) => {
    return campaign.id === Number(id);
  });
};

export default campaignSlice.reducer;
