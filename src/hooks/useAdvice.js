import { useState, useEffect } from 'react';
import axios from 'axios';

const useAdvice = () => {
    const [advice, setAdvice] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAdvice = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://api.adviceslip.com/advice');
            setAdvice(response.data.slip.advice);
            setError(null);
        } catch (error) {
            setError("Couldn't fetch advice. Please try again!");
            setAdvice('');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return { advice, loading, error, fetchAdvice };
};

export default useAdvice;