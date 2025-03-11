import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";

const PieChart = () => {
  const [chartData, setChartData] = useState({ metodo: [], time: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setIsLoading(true);

    // ! Cambiar url a api
    fetch("http://localhost:8080/api/getInformation", {
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

        const {respuesta} = data;

        const metodo = respuesta.map((item) => item.metodo);
        const time = respuesta.map((item) => item.time);
    
        setChartData({ metodo, time });
    
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error obteniendo los datos:", error);
      });
    

    // if (data.pastel) {
    //   const metodo = data.pastel.categorias.map((item) => item.tipo);
    //   const time = data.pastel.categorias.map((item) => item.porcentaje);

    //   setChartData({ metodo, time });
    // }
  }, []);

  console.log(isLoading)

  return (
    isLoading ? (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : (
      <div className="chart-container text-center mb-4">
        <h4>Tiempo</h4>
        <ApexCharts
          options={{
            chart: { background: "#1e1e1e", foreColor: "white" },
            labels: chartData.metodo,
            colors: ["#FF4560", "#00E396", "#008FFB", "#FEB019"],
            tooltip: { theme: "dark" },
            legend: { labels: { colors: "white" } },
          }}
          series={chartData.time}
          type="donut"
          width="100%"
          height="250"
        />
      </div>
    )
  );
};

export default PieChart;
