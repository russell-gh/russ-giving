import { useDispatch } from "react-redux";
import {
  setLogginIn,
  setScreen,
  selectDonations,
} from "../../redux/accountSlice";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const donations = useSelector(selectDonations);

  return (
    <>
      <h2>Dashboard</h2>
      {donations &&
        donations.map((donation) => {
          return (
            <div>
              <h1>{new Date(donation.date).toTimeString()}</h1>
              <p>Cause ID: {donation.id}</p>
              <p>Value: &pound;{donation.value}</p>
            </div>
          );
        })}
      <button
        onClick={() => {
          dispatch(setLogginIn());
          dispatch(setScreen(1));
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Dashboard;
