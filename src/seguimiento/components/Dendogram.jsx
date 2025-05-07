import React from 'react';
import Tree from 'react-d3-tree';
import './custom-tree.css';

const Dendrogram = ({ data }) => {
    const containerStyles = {
        width: '100%',
        height: '100vh',
        backgroundColor: '#ffffff', // Fondo oscuro
    };

    // Función para asignar clases a los enlaces
    const getDynamicPathClass = ({ target }) => {
        return target.children ? 'link__to-branch' : 'link__to-leaf';
    };

    return (
        <div style={containerStyles}>
            <Tree
                data={data}
                orientation="vertical"
                pathClassFunc={getDynamicPathClass}
                rootNodeClassName="node__root"
                branchNodeClassName="node__branch"
                leafNodeClassName="node__leaf"
            />
        </div>
    );
};

export default Dendrogram;