import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar';
import BarChart from './components/BarChart';
import { getEnvVariables } from '../helpers/getEnv';

const Requerimiento2 = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    const { VITE_API_URL } = getEnvVariables();

    useEffect(() => {

        setIsLoading(true);

        fetch(`${VITE_API_URL}/requerimiento2`, {
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

                console.log(data.respuesta);

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
                                <BarChart
                                    key={index}
                                    chartData={{
                                        categories: item.categories,
                                        series: item.series
                                    }}
                                    title={item.title}
                                    xAxisTitle={item.xAxisTitle}
                                    yAxisTitle={item.yAxisTitle}
                                />
                            )
                        })
                    )
                }

                {/* <h1>Año de publicación por tipo de producto</h1> */}
            </div>
        </div>
    );
}

export default Requerimiento2