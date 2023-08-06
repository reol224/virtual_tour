import React from 'react';
import './App.css';
import Planet from './Planet';
import mercuryPlanet from './assets/mercury.png';
import mercuryFacts from './data/mercuryFacts.json';
import venusPlanet from './assets/venus.png';
import venusFacts from './data/venusFacts.json';
import earthPlanet from './assets/earth.png';
import earthFacts from './data/earthFacts.json';
// Add other imports for other planets

const App: React.FC = () => {
    // Define data for each planet
    const planetsData = [
        {
            name: 'Mercury',
            planetImg: mercuryPlanet,
            facts: mercuryFacts,
        },
        {
            name: 'Venus',
            planetImg: venusPlanet,
            facts: venusFacts,
        },
        {
            name: 'Earth',
            planetImg: earthPlanet,
            facts: earthFacts
        }
        // Add other planets data here
    ];

    return (
        <>
            {planetsData.map((planetData) => (
                <Planet key={planetData.name} {...planetData}></Planet>
            ))}
        </>
    );
};

export default App;
