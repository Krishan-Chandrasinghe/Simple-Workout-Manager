import React, { useContext } from 'react';
import { WorkoutsContext } from '../Context/WorkoutsContext';

export function useWorkoutsContext() {
    const context = useContext(WorkoutsContext);
    
    if (!context) {
        throw Error('useWorkoutsContext must be use inside an WorkoutsContextProvider.')
    }

    return context;
}