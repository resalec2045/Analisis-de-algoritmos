import React, { useEffect, useState } from "react";
import Sidebar from "../Components/SideBar";
import KeywordStatsTable from "./components/KeywordStatsTable";
import BarChart from "../dashboard/components/BarChart";

const DashboardAbstract = () => {
  // const [chartData, setChartData] = useState({ metodo: [], time: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {

    setIsLoading(true);

    // ! Cambiar url a api
    fetch("http://localhost:8080/api/getInformationAbstract", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {

        setData(data.respuesta);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error obteniendo los datos:", error);
      });

  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 flex-grow-1">
        <div className="container mt-4">
          <h2 className="text-center mb-5">📊 Dashboard</h2>

          {
            isLoading ? (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <KeywordStatsTable data={data[0]} />
                  </div>
                </div>
                <hr />
                <h3 className="text-center">{data[1].author}</h3>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <BarChart chartData={data[1].results} />
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default DashboardAbstract;
