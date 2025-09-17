import React from 'react';
import ReactMarkdown from 'react-markdown';
import TileComponent from './TileComponent';
import content from './content'; // Import the content
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import './App.css';

const App = () => {
    return (
            <div className="app-container">
            <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
            My short presentation app
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>

            <div className="header">
            
            <h1>Adam <b>Mrozek</b></h1>
            <center><i>Engineering</i></center>
            </div>
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
            <div className="footer">
            </div>
        </div>
    );
};

export default App;

