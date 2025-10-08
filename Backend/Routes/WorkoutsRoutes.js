const express = require('express');
const {
    postWorkout,
    getAllWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
} = require('../Controllers/WorkoutsController');
const requestAuth = require('../Middlewares/requestAuth');

const router = express.Router();

// Protect API routes
router.use(requestAuth);

// Post a new Workout
router.post('/', postWorkout)

// Get all workouts
router.get('/:userId', getAllWorkouts)

// Get a single workout
router.get('/:id', getWorkout)

// Update a workout
router.patch('/:id', updateWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

module.exports = router;