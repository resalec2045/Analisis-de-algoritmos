import ApexCharts from "react-apexcharts";

const BarChart = ({ chartData }) => {
  // Extraer nombres de algoritmos y tiempos de ejecución
  const categories = chartData.map(item => item.algorithm);
  const times = chartData.map(item => item.time);

  return (
    <div className="chart-container text-center mb-4">
      <h5>Tiempo de ejecución de los métodos</h5>
      <ApexCharts
        options={{
          chart: { background: "#1e1e1e", foreColor: "white" },
          xaxis: {
            categories: categories, // Se usa categories en lugar de algorithm
            title: { text: "Nombre del método", style: { color: "white" } },
            labels: { style: { colors: "white" } }
          },
          yaxis: {
            title: { text: "Tiempo en nanosegundos", style: { color: "white" } },
            labels: { style: { colors: "white" } }
          },
          colors: ["#FF4560"],
          tooltip: { theme: "dark" },
        }}
        series={[{ name: "Tiempo", data: times }]}
        type="bar"
        width="100%"
        height="250"
      />
    </div>
  );
};

export default BarChart;
