import React, { useState } from 'react';

interface PlanetProps {
    planetImg: string;
    facts: { title: string; fact: string }[];
    name: string;
}

const Planet: React.FC<PlanetProps> = ({ planetImg, facts, name }) => {
    const [showFacts, setShowFacts] = useState(false);

    const handlePlanetClick = () => {
        setShowFacts((prevShowFacts) => !prevShowFacts);
    };

    return (
        <>
            <div className={`planet ${name}${showFacts ? ' active' : ''}`} onClick={handlePlanetClick}>
                <img src={planetImg} className="planet-img" alt={name} />
            </div>
            {showFacts && (
                <div className="card">
                    <h2>{`${name} Facts`}</h2>
                    {facts.map((fact, index) => (
                        <div key={index}>
                            <h3>{fact.title}</h3>
                            <p>{fact.fact}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Planet;
