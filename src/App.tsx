import './App.css'

import {useState} from 'react';

import mercuryPlanet from './assets/mercury.png';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="planet mercury">
                <img src={mercuryPlanet} className="planet-img" alt="Mercury Planet"/>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on Mercury to learn more
            </p>
        </>
    );
}

export default App;

