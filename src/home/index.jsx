import React from "react";
import Sidebar from "../Components/Sidebar";
// import Chart from "react-apexcharts"; // ✅ Usa el wrapper correcto

// const options = {
//     chart: {
//         height: 350,
//         type: 'line',
//         zoom: { enabled: false }
//     },
//     colors: ['#FF0000'],
//     dataLabels: { enabled: false },
//     stroke: { curve: 'stepline' },
//     title: {
//         text: 'Variación de Sueño por Hora',
//         align: 'left'
//     },
//     grid: {
//         row: {
//             colors: ['#f3f3f3', 'transparent'],
//             opacity: 0.5
//         },
//     },
//     xaxis: {
//         categories: ['06:00', '08:00', '10:00', '12:00']
//     },
//     yaxis: {
//         min: 0 // 🔽 El eje Y comenzará en 0
//     }
// };

// const series = [{
//     name: "Sueño",
//     data: [50, 71, 30, 91]
// }];

const Home = () => {
    return (
        // <div className="d-flex">
        //     <Sidebar />
        //     <div className="p-4 flex-grow-1">
        //         <Chart
        //             options={options}
        //             series={series}
        //             type="line"      // ✅ tipo correcto
        //             width="100%"
        //             height={400}
        //         />
        //     </div>
        // </div>
        <div className="d-flex">
            <Sidebar />
            <div className="p-4 flex-grow-1">

            </div>
        </div>
    );
};

export default Home;
