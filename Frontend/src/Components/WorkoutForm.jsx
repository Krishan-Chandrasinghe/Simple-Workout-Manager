import React, { useState, useEffect } from 'react'
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext';
import { useAuthContext } from '../Hooks/useAuthContext';
import api from '../api';

function WorkoutForm() {
    const { dispatch } = useWorkoutsContext();
    const { dispatch: userDispatch } = useAuthContext();

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFeilds, setEnptyFeilds] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { title, load, reps }

        try {
            const response = await api.post('/workouts/', data, { withCredentials: true });

            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            setEnptyFeilds([]);

            dispatch({ type: 'CREATE_WORKOUT', payload: response.data })
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log("Unauthorized! Redirecting...");
                userDispatch({ type: 'LOGOUT' });
            } else if (error.response && error.response.data.error) {
                setError(error.response.data.error);
                setEnptyFeilds(error.response.data.emptyFeilds);
            } else {
                setError('An unexpected error occurred!');
            }
        }
    }

    return (
        <form className='workout_form' onSubmit={handleSubmit}>
            <h4 className='form_title'>Add Workout here!</h4>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                name="Titile"
                id="title"
                value={title}
                className={emptyFeilds.includes('Title') ? 'input_error' : ''}
                onChange={(e) => setTitle(e.target.value)}
            /> {/* Here no need to write as onChange={(e) => handleChange(e)} because React automatically passes the event (e) to the function. */}

            <label htmlFor="load">Load (in kg):</label>
            <input
                type="number"
                name="load"
                id="load"
                value={load}
                className={emptyFeilds.includes('Load') ? 'input_error' : ''}
                onChange={(e) => setLoad(e.target.value)}
            />

            <label htmlFor="reps">Reps:</label>
            <input
                type="number"
                name="reps"
                id="reps"
                value={reps}
                className={emptyFeilds.includes('Reps') ? 'input_error' : ''}
                onChange={(e) => setReps(e.target.value)}
            />

            <button type="submit">Add workout</button>

            {error && <div className='error_msg'>{error}</div>}
        </form>
    )
}

export default WorkoutForm