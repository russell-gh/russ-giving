import { createSlice } from "@reduxjs/toolkit";
import sha256 from "sha256";
import { getStore, saveStore } from "./diskUtils";

const initialState = {
  screen: 1,
  donations: [
    { id: 1, value: 100, date: Date.now() },
    { id: 2, value: 200, date: Date.now() },
    { id: 3, value: 45, date: Date.now() },
  ],
};

const diskData = getStore();

export const accountSlice = createSlice({
  name: "account",
  initialState: diskData ? diskData : initialState,
  reducers: {
    // setCampaignData: (state, { payload }) => {
    //   state.campaignData = payload;
    // },
    setNewUser: (state, { payload }) => {
      payload.password = sha256(payload.password + "cohort16");
      state.user = payload;
      saveStore(state);
    },
    setScreen: (state, { payload }) => {
      state.screen = payload;
      saveStore(state);
    },
    setLogginIn: (state) => {
      state.loggedIn = !state.loggedIn;
      saveStore(state);
    },
  },
});

export const { setNewUser, setScreen, setLogginIn } = accountSlice.actions;

//gets data from store
// export const selectMessage = (state) => state.campaign.message;
export const selectScreen = (state) => state.account.screen;
export const selectUser = (state) => state.account.user;
export const selectLoggedIn = (state) => state.account.loggedIn;
export const selectDonations = (state) => state.account.donations;

export default accountSlice.reducer;
