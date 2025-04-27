import { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";
import './CoWordNetwork.css'; // 👈 Importamos el CSS

const CoWordNetwork = ({ data }) => {
    const networkRef = useRef(null);

    useEffect(() => {
        if (networkRef.current) {
            const options = {
                nodes: {
                    shape: "dot",
                    size: 16,
                    font: {
                        size: 14,
                        color: "#ffffff" // ⚡ Texto blanco
                    },
                    color: {
                        background: "#ffffff", // ⚡ Bola blanca
                        border: "#ffffff",      // ⚡ Borde blanco
                        highlight: {
                            background: "#ffffff",
                            border: "#ffffff"
                        },
                        hover: {
                            background: "#ffffff",
                            border: "#ffffff"
                        }
                    },
                    borderWidth: 2,
                },
                edges: {
                    width: 2,
                    color: {
                        color: "#7a33bd",   // ⚡ Línea blanca
                        highlight: "#7a33bd",
                        hover: "#7a33bd"
                    },
                },
                physics: {
                    forceAtlas2Based: { gravitationalConstant: -50 },
                    solver: "forceAtlas2Based",
                },
                interaction: {
                    hover: true,
                },
            };

            const network = new Network(networkRef.current, data, options);

            return () => network.destroy();
        }
    }, [data]);

    return (
        <div className="network-container">
            <div ref={networkRef} className="network-canvas" />
        </div>
    );
};

export default CoWordNetwork;
