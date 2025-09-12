import React from 'react';
import TileComponent from './TileComponent';
import './App.css'; // Create a CSS file for overall styling

const App = () => {
    return (
        <div className="app-container">
        <p>
            <h1>Adam <b>Mrozek</b></h1>
            <center><i>Engineering</i></center>
        </p>
        <div className="tiles-container">
            <TileComponent title="Biomedical Engineering" targetId="biomed" />
            <TileComponent title="Systems Engineering" targetId="systems" />
            <TileComponent title="Solutions" targetId="solutions" />
            <TileComponent title="AI" targetId="ai" />
            <TileComponent title="Values" targetId="ai" />
        </div>
        <div className="sections">
            <section id="biomed" className="section"> 
                <h2>Biomedical Engineering</h2>
             <p>Thesis in biomedical engineering started an interest for biology and chemistry. I can solve problems with connection to biochemistry, medicine, life science and even interactions between drugs.</p>
            </section>
            <section id="systems" className="section">
                <h2>Systems Engineering</h2>
                <p>We provide consistent systems for your institution. Master programme in computer engineering with experience in software devlelopment make me fluent to solve your software problems, from DevOps, systems architecture, module design to programming and automation.</p>
            </section>
            <section id="solutions" className="section">
                <h2>Solutions</h2>
                <p>I always solve problems in systematic and structured way, which guarantees reliable time estimates and solutions. I like to understand how the solution works in its environment. Teamwork makes the dream work.</p>
            </section>
            <section id="ai" className="section">
                <h2>AI</h2>
                <p>Following latest trends, application of AI are one of the services I can offer for your institution, including incorporation of language models like chatbots to your systems or more solutions utilizing natural language processing.</p>
            </section>
            <section id="culture" className="section">
            <h2>Culture and Values</h2>
            <p>We do the right things and take responsibility for them. We know our purpose and we are constantly improving for you.</p>
            <p>Supportive work culture is at core of our beliefs. That is why we believe good cooperation is crucial for success. We listen to your problems and comments, we are present on each meeting both with body and spirit. We contribute to supportive culture by understanding that every individual is different. Customer is always at core of our interest, and you as customer will be treated with great interest.</p>
            <p>Everybody here is treated equaly and with great respect: both customers and actors who cooperate with us.</p>
            </section>
        </div>
    </div>
    );
};

export default App;

