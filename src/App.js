import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';

const App = () => {
    const [advice, setAdvice] = useState('');
    const [image, setImage] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const fetchAdvice = async () => {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            setAdvice(response.data.slip.advice);
        } catch (error) {
            setAdvice("Couldn't fetch advice. Please try again!");
        }
    };

    const fetchRandomImage = () => {
        const randomImageUrl = `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 1000)}`;
        setImage(randomImageUrl);
    };

    const updateDateTime = () => {
        const now = new Date();
        const formattedDateTime = now.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        setDateTime(formattedDateTime);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        fetchAdvice();
        fetchRandomImage();
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);

        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        return () => {
            clearInterval(interval);
        };
    }, [darkMode]);

    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <div className="toggle-container">
                <label className="switch">
                    <input type="checkbox" onChange={toggleDarkMode} />
                    <span className="slider"></span>
                </label>
            </div>
            <h1>Daily Inspiration</h1>
            <div className="time-date">{dateTime}</div>
            <div className="advice">
                <p><strong>Advice:</strong> {advice}</p>
            </div>
            <img src={image} alt="Random Inspiration" className="photo" />
            <button onClick={fetchAdvice}>Get New Advice</button>
        </div>
    );
};

export default App;