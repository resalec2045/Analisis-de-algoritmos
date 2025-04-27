import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar';
import BarChart from './components/BarChart';

const Requerimiento3_1 = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {

        setIsLoading(true);

        fetch("http://localhost:8080/api/requerimiento3_1", {
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

                setData(data.respuesta.categorias);

                console.log(data.respuesta.categorias);

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
                                    chartData={item} // 🔥 ahora pasas todo el item completo, no haces destructuring
                                    title={item.author}
                                    xAxisTitle="Palabras"
                                    yAxisTitle="Cantidad"
                                />
                            )
                        })
                    )
                }

            </div>
        </div>
    );
}

export default Requerimiento3_1