import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';

const App = () => {
    const [advice, setAdvice] = useState('');
    const [image, setImage] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

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

    // Handle new tasks
    const handleAddTask = () => {
        if (newTask.trim() === '') return;
        const updatedTasks = [...tasks, { text: newTask, completed: false }];
        setTasks(updatedTasks);
        setNewTask('');
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleToggleTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        
        // Add or remove animation class
        if (updatedTasks[index].completed) {
            updatedTasks[index].animation = 'animate-complete';
        } else {
            updatedTasks[index].animation = '';
        }
    
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    useEffect(() => {
        fetchAdvice();
        fetchRandomImage();
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);

        // Load tasks from localStorage
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) setTasks(savedTasks);

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
            <div className="app-grid">
                <div className="grid-item daily-inspiration">
                    <h1>Daily Inspiration</h1>
                    <div className="time-date">{dateTime}</div>
                    <div className="advice">
                        <p><strong>Advice:</strong> {advice}</p>
                    </div>
                    <button onClick={fetchAdvice}>Get New Advice</button>
                </div>
                <div className="grid-item photo-container">
                    <img src={image} alt="Random Inspiration" className="photo" />
                </div>
                <div className="grid-item todo-container">
                    <h2>To-Do List</h2>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add a new task..."
                    />
                    <button onClick={handleAddTask} className="add-task-button">Add Task</button>
                    <ul>
                        {tasks.map((task, index) => (
                            <li 
                                key={index} 
                                className={`grid-item ${task.completed ? 'completed-task animate-complete' : ''}`}
                            >
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleToggleTask(index)}
                                    className="scale-effect"
                                />
                                <span 
                                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                    className={task.completed ? 'completed-task' : ''}
                                >
                                    {task.text}
                                </span>
                                <button onClick={() => handleDeleteTask(index)} className="delete-task-button">Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;