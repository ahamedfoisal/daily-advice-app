import React from 'react';
import useAdvice from './hooks/useAdvice';
import './styles/App.css';
import { useEffect, useState } from 'react';

const App = () => {
    const { advice, loading, error, fetchAdvice } = useAdvice();
    const [savedAdvice, setSavedAdvice] = useState(
        JSON.parse(localStorage.getItem('savedAdvice')) || []
    );

    useEffect(() => {
        localStorage.setItem('savedAdvice', JSON.stringify(savedAdvice));
    }, [savedAdvice]);

    const saveAdvice = () => {
        if (advice && !savedAdvice.includes(advice)) {
            setSavedAdvice([...savedAdvice, advice]);
        }
    };

    return (
        <div className="App">
            <h1>Daily Advice</h1>
            {loading ? <p>Loading...</p> : <p>{advice}</p>}
            {error && <p>{error}</p>}
            <button onClick={fetchAdvice}>Get New Advice</button>
            <button onClick={saveAdvice}>Save Advice</button>

            <h2>Saved Advice</h2>
            <ul>
                {savedAdvice.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;