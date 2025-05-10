import React from "react";

const SimilarityResults = ({ isLoading, data }) => {
    return (
        <div className="p-4">
            {isLoading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="space-y-6">
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Resultados de Comparaciones
                    </h1>
                    {data?.comparaciones?.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-md p-4 shadow-md"
                        >
                            <h2 className="text-lg font-semibold text-blue-700 mb-2">
                                Comparación {index + 1}
                            </h2>
                            <div className="mb-2">
                                <p className="text-sm text-gray-700">
                                    <strong>Comparación 1:</strong> {item["Comparación 1"]}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Comparación 2:</strong> {item["Comparación 2"]}
                                </p>
                            </div>
                            <div className="flex gap-4 text-sm text-gray-600 mt-2">
                                <span><strong>Jaccard:</strong> {item.Jaccard.toFixed(2)}%</span>
                                <br />
                                <span><strong>TFIDF:</strong> {item.TFIDF.toFixed(2)}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SimilarityResults;
