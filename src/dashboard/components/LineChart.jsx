import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import data from "../../data/data.json"; // Importamos el JSON

const LineChart = () => {
  const [chartData, setChartData] = useState({ categories: [], series: [] });

  useEffect(() => {
    if (data.lineas) {
      const categories = data.lineas.datos.map((item) => item.año);
      const series = data.lineas.datos.map((item) => item.publicaciones);

      setChartData({ categories, series });
    }
  }, []);

  return (
    <div className="chart-container text-center mb-4">
      <h4>{data.lineas.titulo}</h4>
      <ApexCharts
        options={{
          chart: { background: "#1e1e1e", foreColor: "white" },
          xaxis: {
            categories: chartData.categories,
            title: { text: data.lineas.eje_x, style: { color: "white" } },
            labels: { style: { colors: "white" } }
          },
          yaxis: {
            title: { text: data.lineas.eje_y, style: { color: "white" } },
            labels: { style: { colors: "white" } }
          },
          colors: ["#00E396"],
          tooltip: { theme: "dark" },
        }}
        series={[{ name: "Publicaciones", data: chartData.series }]}
        type="line"
        width="100%"
        height="250"
      />
    </div>
  );
};

export default LineChart;
