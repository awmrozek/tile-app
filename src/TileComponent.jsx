import React from 'react';
import './TileComponent.css'; // Create a CSS file for styling

const TileComponent = ({ title, targetId }) => {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="tile" onClick={handleClick}>
            <h2>{title}</h2>
        </div>
    );
};

export default TileComponent;

