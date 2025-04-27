import { useEffect, useRef } from "react";
import WordCloud from "wordcloud";

const WordCloudChart = ({ words }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;

        // 🛠️ Asegurar que el canvas tenga tamaño correcto
        canvas.width = 1200;
        canvas.height = 800;

        if (words && words.length > 0) {
            const formattedWords = words
                .filter(w => w.value > 0)
                .map(w => [w.text, w.value]);

            if (formattedWords.length > 0) {
                WordCloud(canvas, {
                    list: formattedWords,
                    gridSize: 8,
                    weightFactor: (size) => size * 2, // Ajuste automático
                    fontFamily: "Impact",
                    color: "random-dark",
                    backgroundColor: "#1e1e1e",
                    rotateRatio: 0.5,
                    rotationSteps: 2,
                    shuffle: true,
                    drawOutOfBound: false,
                    origin: [canvas.width / 2, canvas.height / 2],
                });
            }
        }
    }, [words]);

    return (
        <div style={{ width: "100%", height: "400px", background: "#141414" }}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default WordCloudChart;
