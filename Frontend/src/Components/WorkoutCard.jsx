import React from 'react';
import { MdDelete } from "react-icons/md";
import { formatDistanceToNow } from 'date-fns';

function WorkoutCard({ workout, handleDelete }) {

    return (
        <div className='workout_card'>
            <h3>{workout.title}</h3>
            <h5>Load: {workout.load}</h5>
            <h5>Reps: {workout.reps}</h5>
            <p>Created {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <div className='workout_delete'>
                <MdDelete onClick={() => handleDelete(workout._id)} title='Delete Workout' />
            </div>

        </div>
    )
}

export default WorkoutCard