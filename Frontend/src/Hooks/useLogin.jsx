import axios from 'axios';
import React, { useState } from 'react'
import { useAuthContext } from './useAuthContext';
import api from '../api';

export function useLogin() {
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        setIsLoading(true);

        try {
            const response = await api.post('/users/login', { email, password }, { withCredentials: true });

            dispatch({ type: 'LOGIN', payload: response.data.user });

            setIsLoading(false);

        } catch (error) {
            setError(error.response.data.error);
            setIsLoading(false);
        }

    }
    return { login, isLoading, error }
}