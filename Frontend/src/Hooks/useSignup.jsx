import React, { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import api from '../api';

export function useSignup() {
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const { dispatch } = useAuthContext();

    const signup = async (username, email, password) => {
        setError(null);
        setIsLoading(true);
        try {
            const response = await api.post('/users/signup', { username, email, password });

            const { user, token } = response.data;

            // save user to local storage
            localStorage.setItem('auth', JSON.stringify({ user, token }));

            dispatch({ type: 'LOGIN', payload: user });

            setIsLoading(false);
        } catch (error) {
            setError(error.response.data.error);
            setIsLoading(false);
        }
    }
    return { signup, isLoading, error }
}