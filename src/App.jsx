import React from 'react';
import TileComponent from './TileComponent';
import './App.css'; // Create a CSS file for overall styling

const App = () => {
    return (
        <div className="app-container">
            <h1>My Responsive Tile System</h1>
            <div className="tiles-container">
                <TileComponent title="Section 1" targetId="section1" />
                <TileComponent title="Section 2" targetId="section2" />
                <TileComponent title="Section 3" targetId="section3" />
                <TileComponent title="Section 4" targetId="section4" />
            </div>
            <div className="sections">
                <section id="section1" className="section"> 
                    <h2>Section 1</h2>
                    <p>Content for section 1.</p>
                </section>
                <section id="section2" className="section">
                    <h2>Section 2</h2>
                    <p>Content for section 2.</p>
                </section>
                <section id="section3" className="section">
                    <h2>Section 3</h2>
                    <p>Content for section 3.</p>
                </section>
                <section id="section4" className="section">
                    <h2>Section 4</h2>
                    <p>Content for section 4.</p>
                </section>
            </div>
        </div>
    );
};

export default App;

