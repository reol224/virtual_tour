// planet-explorer-backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000; // Change this port if needed

// Sample data for planets
const planetsData = [
    {
        name: "Mercury",
        description: "The smallest planet in our solar system.",
    },
    // Add more planets here...
];

app.use(cors());

// Endpoint to get all planets
app.get("/api/planets", (req, res) => {
    res.json(planetsData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
