import React from 'react';

const KeywordStatsTable = ({ data }) => {
  return (
    <div className="p-4 chart-container text-center mb-4">
      <h2 className="text-xl font-bold mb-4">Conteo de Palabras Clave</h2>
      <div className="inline-block overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 mx-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Palabra</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{item.palabra}</td>
                <td className="border border-gray-300 px-4 py-2">{item.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeywordStatsTable;
