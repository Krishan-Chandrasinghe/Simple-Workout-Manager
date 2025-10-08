import React, { useEffect } from 'react'
import WorkoutCard from '../Components/WorkoutCard';
import WorkoutForm from '../Components/WorkoutForm';
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext';
import { useAuthContext } from '../Hooks/useAuthContext';
import api from '../api';

function Home() {

    const { workouts, dispatch } = useWorkoutsContext();
    const { user, dispatch: userDispatch } = useAuthContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const resp = await api.get(`/workouts/${user._id}`, { withCredentials: true });
                dispatch({ type: 'SET_WORKOUT', payload: resp.data });
            } catch (error) {
                if (error.response && error.status === 404) {
                    console.log("Empty workouts");
                }
                else
                    console.error('Error fetching workouts:', error);
            }
        }
        fetchWorkouts();
    }, [dispatch])


    const handleDelete = async (id) => {
        if (confirm("Are you sure?")) {
            try {
                const response = await api.delete(`/workouts/${id}`, { withCredentials: true })
                dispatch({ type: 'DELETE_WORKOUT', payload: response.data });

            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log("Unauthorized! Redirecting...");
                    userDispatch({ type: 'LOGOUT' })
                } else {
                    console.error(error)
                }
            }
        }
    }

    return (
        <div className='page'>
            <div className="home">
                <div className='workout_list'>
                    {
                        workouts && workouts.map((workout) => {
                            return (
                                <WorkoutCard key={workout._id} workout={workout} handleDelete={handleDelete} />
                            )
                        })
                    }
                </div>
                <WorkoutForm />
            </div>
        </div>
    )
}

export default Home