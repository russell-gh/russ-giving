import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  //murate the store > adding deleting editing
  reducers: {
    setCompaignData: (state, { payload }) => {
      state.compaignData = payload;
    },
  },
});

export const { setCompaignData } = campaignSlice.actions;

//gets data from store
export const selectCampaignData = (state) => state.campaign.compaignData;

export default campaignSlice.reducer;
