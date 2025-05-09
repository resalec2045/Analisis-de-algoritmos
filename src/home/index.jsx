import React from "react";
import Sidebar from "../Components/Sidebar";

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
                <section className="w-full px-6 py-12 dark:bg-gray-900">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                            📊 Análisis Bibliométrico del Pensamiento Computacional
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            Bienvenido a nuestra herramienta interactiva desarrollada en el marco del curso de Análisis de Algoritmos.
                            Esta aplicación te permite explorar y analizar la producción científica sobre <strong>pensamiento computacional </strong>
                            mediante visualizaciones dinámicas, agrupación por similitud textual y técnicas bibliométricas avanzadas.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            Con datos extraídos de bases como ACM, SAGE y ScienceDirect, puedes:
                        </p>
                        <ul className="text-left text-gray-600 dark:text-gray-300 list-disc list-inside mb-6">
                            <li>Visualizar redes de co-ocurrencia de palabras clave.</li>
                            <li>Visualizar estadísticas por autor, journal, publisher y tipo de producto.</li>
                            <li>Agrupar publicaciones por similitud entre abstracts.</li>
                        </ul>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Todo esto desde una plataforma accesible, confiable y respaldada por técnicas de análisis computacional y estadístico.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
