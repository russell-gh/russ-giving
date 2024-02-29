import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage, updateExistingCampaign } from "../../redux/campaignSlice";
import { setNewDonation } from "../../redux/accountSlice";

const Donate = ({ campaign, setDonate }) => {
  const [monthly, setMonthly] = useState(false);
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setNewDonation({ monthly, value: userInput.amount, campaign }));
    dispatch(
      updateExistingCampaign({ id: campaign.id, value: userInput.amount })
    );
    dispatch(setMessage("Thankyou from " + campaign.PageOwner));
    setDonate();
  };

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit} onInput={onInput}>
      <button
        style={{ backgroundColor: monthly ? "red" : "green" }}
        onClick={() => {
          setMonthly(true);
        }}
      >
        Monthly
      </button>
      <button
        style={{ backgroundColor: monthly ? "green" : "red" }}
        onClick={() => {
          setMonthly(false);
        }}
      >
        One off
      </button>
      <label htmlFor="amount">Amount</label>
      <input type="number" id="amount" name="amount" />
      <label htmlFor="hide">Hide</label>
      <input type="checkbox" id="hide" name="hide" />
      <button>Proceed</button>
    </form>
  );
};

export default Donate;
