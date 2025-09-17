import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import TileComponent from './TileComponent';
import content from './content'; // Import the content
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';
import './App.css';

const App = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
          try {
            const response = await axios.get('http://10.0.0.113:5000/api/cards');
            setCards(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchCards();
      }, []);
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
        <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
            <div className="footer">
            </div>
        </div>
    );
};

export default App;

