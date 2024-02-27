import { jgDateToJson } from "../utils";
import { Link } from "react-router-dom";

const Campaign = ({ campaign }) => {
  return (
    <div className="searchResult">
      <img src={campaign.Photo} />
      <p>{campaign.PageOwner}</p>
      <h1>{campaign.PageName}</h1>
      <h2>{new Date(jgDateToJson(campaign.EventDate)).toDateString()}</h2>
      <Link to={"/campaign/" + campaign.id}>Details</Link>
    </div>
  );
};

export default Campaign;
