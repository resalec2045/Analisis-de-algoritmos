import React from "react";

const ComparacionClustering = () => {
    return (
        <div className="p-4 flex justify-center">
            <h1 className="text-2xl font-bold mb-6">Diferencias entre ClusteringServiceSmileAgnes y DivisiveClusteringSmileDiana</h1>
            <div className="p-4 overflow-x-auto">
                <table className="flex justify-center min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Aspecto</th>
                            <th className="px-4 py-2 border">ClusteringServiceSmile (Aglomerativo)</th>
                            <th className="px-4 py-2 border">DivisiveClusteringSmile (Divisivo)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((fila, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}>
                                <td className="px-4 py-2 border font-semibold">{fila.aspecto}</td>
                                <td className="px-4 py-2 border">{fila.aglomerativo}</td>
                                <td className="px-4 py-2 border">{fila.divisivo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const datos = [
    {
        aspecto: "Tipo de clustering",
        aglomerativo: "Aglomerativo (bottom-up): empieza de palabras sueltas y agrupa.",
        divisivo: "Divisivo (top-down): empieza de un solo grupo y divide.",
    },
    {
        aspecto: "Estrategia general",
        aglomerativo: "Fusiona elementos de a dos que estén más cerca.",
        divisivo: "Separa en dos subgrupos más diferentes primero.",
    },
    {
        aspecto: "Base algorítmica",
        aglomerativo: "Usa CompleteLinkage o UPGMALinkage de Smile.",
        divisivo: "Usa distancias Euclidianas de Smile directamente.",
    },
    {
        aspecto: "Inicio del proceso",
        aglomerativo: "Cada palabra es su propio cluster.",
        divisivo: "Todas las palabras están en un solo gran grupo.",
    },
    {
        aspecto: "Formación de jerarquía",
        aglomerativo: "Natural para dendrogramas clásicos.",
        divisivo: "La lógica de corte es manual basada en distancias.",
    },
    {
        aspecto: "Coste computacional",
        aglomerativo: "O(n² log n) optimizado.",
        divisivo: "Aproximadamente O(n²).",
    },
    {
        aspecto: "Ventaja",
        aglomerativo: "Excelente en datasets densos.",
        divisivo: "Ideal para datos muy separados.",
    },
    {
        aspecto: "Desventaja",
        aglomerativo: "Puede forzar a unir elementos lejanos.",
        divisivo: "Puede sobredividir si no se controla bien.",
    },
    {
        aspecto: "Flexibilidad para optimizar",
        aglomerativo: "Se puede cambiar el tipo de linkage.",
        divisivo: "Se puede ajustar estrategia de separación.",
    }
];

export default ComparacionClustering;
