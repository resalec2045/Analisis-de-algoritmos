import { useEffect, useRef } from "react";
import WordCloud from "wordcloud";

const WordCloudChart = ({ words }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // 🧼 Limpiar antes de redibujar
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        canvas.width = 800;
        canvas.height = 500;

        const formattedWords = words
            .filter(w => w.value > 0)
            .map(w => [w.text, w.value]);

        if (formattedWords.length > 0) {
            WordCloud(canvas, {
                list: formattedWords,
                gridSize: 8,
                weightFactor: (size) => size * 2,
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
    }, [words]);

    return (
        <div className="d-flex justify-content-center" style={{ overflow: 'hidden' }}>
            <canvas ref={canvasRef} style={{ maxWidth: "100%", height: "500px" }} />
        </div>
    );
};

export default WordCloudChart;
