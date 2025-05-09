import React, { useEffect, useState } from "react";
import Barchart from "./components/BarChart";
import Sidebar from "../Components/Sidebar";
import { getEnvVariables } from "../helpers/getEnv";

const Dashboard = () => {
  // const [chartData, setChartData] = useState({ metodo: [], time: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const { VITE_API_URL } = getEnvVariables();

  useEffect(() => {

    setIsLoading(true);

    fetch(`${VITE_API_URL}/getInformation`, {
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
              data.map((item, index) => {
                return (
                  <>
                    <h3 className="text-center">{item.author}</h3>
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <Barchart chartData={item.results} />
                      </div>
                    </div>
                  </>
                )
              })
            )

          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
