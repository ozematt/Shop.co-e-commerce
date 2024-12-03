import { Outlet } from "react-router";
import Nav from "../sections/Nav";
import TopBar from "../sections/TopBar";

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <Nav />
      <Outlet />
    </>
  );
};

export default Dashboard;
