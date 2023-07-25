import { useState } from 'react';
import './App.css';
import mercuryPlanet from './assets/mercury.png';
import mercuryFacts from './data/mercuryFacts.json';

function App() {
    const [showFacts, setShowFacts] = useState(false);

    const handlePlanetClick = () => {
        setShowFacts(!showFacts);
    };

    return (
        <>
            <div className={`planet mercury${showFacts ? " active" : ""}`} onClick={handlePlanetClick}>
                <img src={mercuryPlanet} className="planet-img" alt="Mercury Planet" />
            </div>
            {showFacts && (
                <div className="card">
                    <h2>Mercury Facts</h2>
                    {mercuryFacts.map((fact, index) => (
                        <div key={index}>
                            <h3>{fact.title}</h3>
                            <p>{fact.fact}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default App;
