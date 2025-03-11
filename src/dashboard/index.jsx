import React from "react";
import Barchart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Sidebar from "../Components/SideBar";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 flex-grow-1">
        <div className="container mt-4">
          <h2 className="text-center">📊 Dashboard</h2>
          {/* <p className="text-center">Análisis de publicaciones en diferentes dimensiones.</p> */}

          <div className="row justify-content-center">
            <div className="col-md-8">
              {/* <PieChart /> */}
              <Barchart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
