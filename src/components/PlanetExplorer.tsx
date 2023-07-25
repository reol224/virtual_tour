// src/components/PlanetExplorer.tsx
import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import PlanetCard from "./PlanetCard";
import axios from "axios";

interface Planet {
    name: string;
    description: string;
}

const PlanetExplorer: React.FC = () => {
    const [planets, setPlanets] = useState<Planet[]>([]);
    const [zoomedPlanet, setZoomedPlanet] = useState<Planet | null>(null);

    useEffect(() => {
        // Fetch planets from the backend API
        axios.get("/api/planets").then((response) => {
            setPlanets(response.data);
        });
    }, []);

    const handlePlanetClick = (planet: Planet) => {
        setZoomedPlanet(planet);
    };

    const handleZoomOut = () => {
        setZoomedPlanet(null);
    };

    return (
        <Box p={3}>
            <Grid container spacing={2}>
                {planets.map((planet) => (
                    <Grid item xs={12} sm={6} md={4} key={planet.name}>
                        <PlanetCard planet={planet} onClick={() => handlePlanetClick(planet)} />
                    </Grid>
                ))}
            </Grid>
            {zoomedPlanet && (
                <div>
                    <h2>{zoomedPlanet.name}</h2>
                    <p>{zoomedPlanet.description}</p>
                    <button onClick={handleZoomOut}>Zoom Out</button>
                </div>
            )}
        </Box>
    );
};

export default PlanetExplorer;
