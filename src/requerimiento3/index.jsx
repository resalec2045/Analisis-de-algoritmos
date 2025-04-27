import React from 'react'
import Sidebar from '../Components/Sidebar';
import WordCloudChart from './components/WordCloudChart';
import CoWordNetwork from './components/CoWordNetwork';

const testWords = [
    { text: "Programming", value: 50 },
    { text: "Algorithm", value: 30 },
    { text: "Debug", value: 20 },
    { text: "Creativity", value: 25 },
    { text: "Logic", value: 15 },
    { text: "Logic2", value: 15 },
    { text: "Logic3", value: 45 },
    { text: "Logic4", value: 35 },
    { text: "Logic5", value: 5 },
    { text: "Logic6", value: 65 },
    { text: "Logic7", value: 75 },
    { text: "Logi8", value: 85 },
    { text: "Logic9", value: 25 },
    { text: "Logic10", value: 45 },
    { text: "Logic11", value: 25 },
];

const data = {
    nodes: [
        { id: 1, label: "Programming" },
        { id: 2, label: "Algorithm" },
        { id: 3, label: "Debug" },
        { id: 4, label: "Debug" },
        { id: 5, label: "Debug" },
    ],
    edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 4, to: 3 },
        { from: 3, to: 5 },
    ],
};

const Requerimiento3 = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-4 flex-grow-1">
                <h1 className="text-center">Requerimiento 3</h1>
                <div className="text-center mb-4">
                    <h5>Word Cloud</h5>
                    <WordCloudChart words={testWords} />
                </div>
                <div className="text-center mb-4">
                    <h5>Co-Word Network</h5>
                    <CoWordNetwork data={data} />
                </div>
            </div>
        </div>
    );
}

export default Requerimiento3