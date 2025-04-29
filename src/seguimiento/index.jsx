import React, { useEffect, useState } from "react";
import Sidebar from '../Components/Sidebar';
import Dendrogram from './components/Dendogram';
import ComparacionClustering from "./components/Table";

const Seguimiento = () => {

    // const [chartData, setChartData] = useState({ metodo: [], time: [] });
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);
    const [description, setDescription] = useState(true);
    const [data, setData] = useState();
    const [data2, setData2] = useState();

    useEffect(() => {

        setIsLoading(true);

        fetch("http://localhost:8080/api/preprocesamientoDescriptionUtiliced", {
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
            .then((description) => {

                setDescription(description.respuesta);

                console.log(description.respuesta);

                setIsLoading3(false);
            })
            .catch((error) => {
                console.error("Error obteniendo los datos:", error);
            });

        fetch("http://localhost:8080/api/preprocesamientoTextoAgnes", {
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

        fetch("http://localhost:8080/api/preprocesamientoTextoDiana", {
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
            .then((data2) => {

                setData2(data2.respuesta);

                setIsLoading2(false);
            })
            .catch((error) => {
                console.error("Error obteniendo los datos:", error);
            });

    }, []);

    return (
        <div className="flex flex-row h-screen bg-gray-100 dark:bg-gray-900">
            <Sidebar />

            <div className="flex flex-col w-full p-4 overflow-y-auto">
                <div className="flex-grow mt-4">

                    <h1 className="text-3xl font-bold mb-4">Abstract utilizado</h1>
                    {isLoading3 ? (
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <p>{description}</p>
                    )}

                    <h1 className="text-3xl font-bold mb-4">Dendograma Agnes (Aglomerativo)</h1>
                    {isLoading ? (
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <Dendrogram data={data} />
                    )}

                    <hr className="my-4" />
                    <h2 className="text-2xl font-bold mb-4">Dendrograma Diana (Divisivo)</h2>

                    {isLoading2 ? (
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <Dendrogram data={data2} />
                    )}
                </div>
                <div className="flex text-center align-items-center justify-center mt-4">
                    <ComparacionClustering />
                </div>
            </div>
        </div>
    );
}


export default Seguimiento;
