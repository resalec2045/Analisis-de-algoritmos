import React, { useEffect, useState } from "react";
import Sidebar from '../Components/Sidebar';
import Dendrogram from './components/Dendogram';
import ComparacionClustering from "./components/Table";
import { getEnvVariables } from "../helpers/getEnv";

const Seguimiento = () => {

    // const [chartData, setChartData] = useState({ metodo: [], time: [] });
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);
    const [description, setDescription] = useState(true);
    const [data, setData] = useState();
    const [data2, setData2] = useState();

    const { VITE_API_URL } = getEnvVariables();

    useEffect(() => {

        setIsLoading(true);

        fetch(`${VITE_API_URL}/preprocesamientoDescriptionUtiliced`, {
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

                setDescription(description.respuesta.split('+_+'));

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

                    <h1 className="text-3xl font-bold mb-4">Primer abstract utilizado</h1>
                    {isLoading3 ? (
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <p>{description[0]}</p>
                    )}
                    <h1 className="text-3xl font-bold mb-4">Segundo abstract utilizado</h1>
                    {isLoading3 ? (
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <p>{description[1]}</p>
                    )}
                    <h1 className="text-3xl font-bold mb-4">Similitud: {description[2]}%</h1>

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

                    <div className="flex text-center align-items-center justify-center mt-4">
                        <ComparacionClustering />
                    </div>

                    <h1 className="text-3xl font-bold mb-4">Conclusión</h1>
                    <p>
                        Los abstracts científicos suelen contener terminología técnica y estructuras lingüísticas complejas. La coherencia semántica y la precisión en la agrupación son cruciales para aplicaciones como la organización de literatura o la recuperación de información.

                        AGNES tiende a producir agrupamientos más coherentes en textos científicos debido a su enfoque aglomerativo, que permite construir clústeres basados en similitudes locales útil cuando se trabaja con datos textuales donde las relaciones semánticas pueden ser sutiles y contextuales.
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Seguimiento;
