import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  //murate the store > adding deleting editing
  reducers: {
    setCampaignData: (state, { payload }) => {
      state.campaignData = payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
  },
});

export const { setCampaignData, setSearchTerm, setMessage } =
  campaignSlice.actions;

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
