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
                <div className="space-y-10">
                    {Object.entries(data).map(([methodName, methodData]) => (
                        <div key={methodName}>
                            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                                Resultados por método: {methodName}
                            </h1>
                            {methodData?.Texto?.map((abstractGroup, groupIndex) => (
                                <div
                                    key={groupIndex}
                                    className="space-y-4 border border-gray-300 rounded-md p-4 shadow mb-6"
                                >
                                    <h2 className="text-lg font-semibold text-blue-700">
                                        Texto {groupIndex + 1}
                                    </h2>
                                    {abstractGroup.map((abstract, idx) => (
                                        <p key={idx} className="text-justify text-sm text-gray-700 leading-relaxed">
                                            {abstract}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SimilarityResults;
