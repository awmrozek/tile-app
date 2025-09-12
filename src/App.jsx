import React from 'react';
import ReactMarkdown from 'react-markdown';
import TileComponent from './TileComponent';
import content from './content'; // Import the content
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <h1>Adam <b>Mrozek</b></h1>
            <center><i>Engineering</i></center>
            <div className="tiles-container">
                {Object.keys(content).map(key => (
                    <TileComponent key={key} title={content[key].title} targetId={key} />
                ))}
            </div>
            <div className="sections">
                {Object.keys(content).map(key => (
                    <section key={key} id={key} className="section">
                        <h2>{content[key].title}</h2>
                        <ReactMarkdown>{content[key].text}</ReactMarkdown>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default App;

