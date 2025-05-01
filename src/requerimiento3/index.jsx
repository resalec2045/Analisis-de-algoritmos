import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar';
import WordCloudChart from './components/WordCloudChart';
import CoWordNetwork from './components/CoWordNetwork';

import './styles.css';
import WordCloudChartPorCategoria from './components/WordCloudChartCategoria';
// const testWords = [
//     { text: "Programming", value: 50 },
//     { text: "Algorithm", value: 30 },
//     { text: "Debug", value: 20 },
//     { text: "Creativity", value: 25 },
//     { text: "Logic", value: 15 },
//     { text: "Logic2", value: 15 },
//     { text: "Logic3", value: 45 },
//     { text: "Logic4", value: 35 },
//     { text: "Logic5", value: 5 },
//     { text: "Logic6", value: 65 },
//     { text: "Logic7", value: 75 },
//     { text: "Logi8", value: 85 },
//     { text: "Logic9", value: 25 },
//     { text: "Logic10", value: 45 },
//     { text: "Logic11", value: 25 },
// ];

// const data2 = {
//     nodes: [
//         { id: 1, label: "Programming" },
//         { id: 2, label: "Algorithm" },
//         { id: 3, label: "Debug" },
//         { id: 4, label: "Debug" },
//         { id: 5, label: "Debug" },
//     ],
//     edges: [
//         { from: 1, to: 2 },
//         { from: 1, to: 3 },
//         { from: 4, to: 3 },
//         { from: 3, to: 5 },
//     ],
// };

const Requerimiento3 = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);
    const [data, setData] = useState();
    const [data2, setData2] = useState();
    const [data3, setData3] = useState();

    useEffect(() => {

        fetch("http://localhost:8080/api/requerimiento3", {
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

        fetch("http://localhost:8080/api/requerimiento3PorCategoria", {
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

                setData3(data.respuesta);

                setIsLoading3(false);
            })
            .catch((error) => {
                console.error("Error obteniendo los datos:", error);
            });

        fetch("http://localhost:8080/api/requerimiento3_2", {
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

                setData2(data.respuesta);

                setIsLoading2(false);
            })
            .catch((error) => {
                console.error("Error obteniendo los datos:", error);
            });

    }, []);

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-4 flex-grow-1">

                <div className="page-section">
                    <h5>Co-Word Network</h5>

                    {isLoading2 ? (
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="">
                            <CoWordNetwork data={data2} />
                        </div>
                    )}
                </div>


                <div className="page-section">
                    <h5>Word Cloud global</h5>

                    {isLoading ? (
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="">
                            <WordCloudChart words={data} />
                        </div>
                    )}
                </div>

                <div className="page-section">
                    <h5 className="text-center mb-4">Word Cloud por categoría</h5>

                    {isLoading3 ? (
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="wordcloud-container">
                            {data3 && Object.entries(data3).map(([categoria, words]) => (
                                <div className="page-section">
                                    <div key={categoria} className="mb-5">
                                        <h6 className="text-white text-center mb-2">{categoria}</h6>
                                        <WordCloudChart words={words} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
}

export default Requerimiento3