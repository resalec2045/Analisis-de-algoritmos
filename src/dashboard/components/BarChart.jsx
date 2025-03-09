import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import data from "../../data/data.json"; // Importamos el JSON

const BarChart = () => {
  const [chartData, setChartData] = useState({ categories: [], series: [] });

  useEffect(() => {
    if (data.barras) {
      const categories = data.barras.datos.map((item) => item.autor);
      const series = data.barras.datos.map((item) => item.publicaciones);

      setChartData({ categories, series });
    }
  }, []);

  return (
    <div className="chart-container text-center mb-4">
      <h4>{data.barras.titulo}</h4>
      <ApexCharts
        options={{
          chart: { background: "#1e1e1e", foreColor: "white" },
          xaxis: {
            categories: chartData.categories,
            title: { text: data.barras.eje_x, style: { color: "white" } },
            labels: { style: { colors: "white" } }
          },
          yaxis: {
            title: { text: data.barras.eje_y, style: { color: "white" } },
            labels: { style: { colors: "white" } }
          },
          colors: ["#FF4560"],
          tooltip: { theme: "dark" },
        }}
        series={[{ name: "Publicaciones", data: chartData.series }]}
        type="bar"
        width="100%"
        height="250"
      />
    </div>
  );
};

export default BarChart;
