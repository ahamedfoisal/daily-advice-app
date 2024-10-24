import { useState, useEffect } from 'react';
import axios from 'axios';

const useAdvice = () => {
    const [advice, setAdvice] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAdvice = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            setAdvice(response.data.slip.advice);
            setError(null);
        } catch (err) {
            setError('Failed to fetch advice');
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