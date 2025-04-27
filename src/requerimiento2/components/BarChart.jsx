import ApexCharts from "react-apexcharts";

const BarChart = ({ chartData, title = "Título del gráfico", xAxisTitle = "Categorías", yAxisTitle = "Cantidad" }) => {
  const categories = chartData.categories;
  const seriesData = chartData.series;

  return (
    <div className="chart-container text-center mb-4">
      <h5>{title}</h5>
      <ApexCharts
        options={{
          chart: { background: "#1e1e1e", foreColor: "white" },
          xaxis: {
            categories: categories,
            title: { text: xAxisTitle, style: { color: "white" } },
            labels: { style: { colors: "white" } }
          },
          yaxis: {
            title: { text: yAxisTitle, style: { color: "white" } },
            labels: { style: { colors: "white" } }
          },
          colors: ["#FF4560"],
          tooltip: { theme: "dark" },
        }}
        series={[{ name: yAxisTitle, data: seriesData }]}
        type="bar"
        width="100%"
        height="250"
      />
    </div>
  );
};

export default BarChart;
