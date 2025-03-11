import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";

const BarChart = () => {
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

        const { respuesta } = data;

        const metodo = respuesta.map((item) => item.metodo);
        const time = respuesta.map((item) => item.time);

        setChartData({ metodo, time });

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error obteniendo los datos:", error);
      });

  }, []);

  return (
    isLoading ? (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : (
      <div className="chart-container text-center mb-4">
        <h4>Tiempo de ejecución de los metodos</h4>
        <ApexCharts
          options={{
            chart: { background: "#1e1e1e", foreColor: "white" },
            xaxis: {
              categories: chartData.metodo,
              title: { text: "Nombre del metodo", style: { color: "white" } },
              labels: { style: { colors: "white" } }
            },
            yaxis: {
              title: { text: "Tiempo en nanosegundos", style: { color: "white" } },
              labels: { style: { colors: "white" } }
            },
            colors: ["#FF4560"],
            tooltip: { theme: "dark" },
          }}
          series={[{ name: "Tiempo", data: chartData.time }]}
          type="bar"
          width="100%"
          height="250"
        />
      </div>
    )
  );
};

export default BarChart;
