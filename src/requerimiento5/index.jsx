import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar';
import SimilarityResults from './SimilarityResults';
import { getEnvVariables } from '../helpers/getEnv';

const Requerimiento5 = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const { VITE_API_URL } = getEnvVariables();

    useEffect(() => {

        fetch(`${VITE_API_URL}/requerimiento5`, {
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

    }, []);

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-4 flex-grow-1">
                {isLoading ? (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="">
                        <SimilarityResults isLoading={false} data={data} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Requerimiento5