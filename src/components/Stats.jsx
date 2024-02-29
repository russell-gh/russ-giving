import Donate from "./account/Donate";
import { useState } from "react";

const Stats = ({ campaign }) => {
  const [donate, setDonate] = useState(false);

  return (
    <>
      <h2>&pound;{campaign.contributed}</h2>
      <h3>raised of &pound;{campaign.required}</h3>
      <h4>by {campaign.supporters} supporters</h4>
      <button
        onClick={() => {
          setDonate(!donate);
        }}
      >
        Give Now
      </button>
      {donate && <Donate campaign={campaign} setDonate={setDonate} />}
    </>
  );
};

export default Stats;
