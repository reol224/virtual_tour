// src/components/PlanetCard.tsx
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface Planet {
    name: string;
    description: string;
}

interface PlanetCardProps {
    planet: Planet;
    onClick: () => void;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet, onClick }) => {
    return (
        <Card onClick={onClick} style={{ cursor: "pointer" }}>
    <CardContent>
        <Typography variant="h5" component="div">
        {planet.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {planet.description}
        </Typography>
        </CardContent>
        </Card>
);
};

export default PlanetCard;
