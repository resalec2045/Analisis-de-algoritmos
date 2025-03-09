import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import data from "../../data/data.json"; // Importamos el JSON

const PieChart = () => {
  const [chartData, setChartData] = useState({ categories: [], series: [] });

  useEffect(() => {
    if (data.pastel) {
      const categories = data.pastel.categorias.map((item) => item.tipo);
      const series = data.pastel.categorias.map((item) => item.porcentaje);

      setChartData({ categories, series });
    }
  }, []);

  return (
    <div className="chart-container text-center mb-4">
      <h4>{data.pastel.titulo}</h4>
      <ApexCharts
        options={{
          chart: { background: "#1e1e1e", foreColor: "white" },
          labels: chartData.categories,
          colors: ["#FF4560", "#00E396", "#008FFB", "#FEB019"],
          tooltip: { theme: "dark" },
          legend: { labels: { colors: "white" } },
        }}
        series={chartData.series}
        type="donut"
        width="100%"
        height="250"
      />
    </div>
  );
};

export default PieChart;
