import { useParams } from "react-router";
import { jgDateToJson } from "../utils";
import { useSelector } from "react-redux";
import { selectSingleCampaign } from "../redux/campaignSlice";
import Stats from "./Stats";

const CampaignDetails = () => {
  const { id } = useParams(); //TBD
  const campaign = useSelector(selectSingleCampaign(id));

  return (
    <div className="campaignDetails">
      <div className="">
        <h1>{campaign.PageName}</h1>
        <img src={campaign.Photo} />
        <p>{campaign.PageOwner}</p>
        <h3>
          Created date:
          {new Date(jgDateToJson(campaign.CreatedDate)).toDateString()}
        </h3>
        <h2>{new Date(jgDateToJson(campaign.EventDate)).toDateString()}</h2>
      </div>
      <div className="stats">
        <Stats campaign={campaign} />
      </div>
    </div>
  );
};

export default CampaignDetails;
