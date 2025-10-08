const Workout = require('../Models/WorkoutsModel');
const { default: mongoose } = require('mongoose');

// Post a new Workout
const postWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    const emptyFeilds = [];

    if (!title) emptyFeilds.push('Title');
    if (!load) emptyFeilds.push('Load');
    if (!reps) emptyFeilds.push('Reps');

    if (emptyFeilds.length > 0) {
        return res.status(400).json({ error: `${emptyFeilds.join(', ')} required!`, emptyFeilds });
    }

    try {
        console.log("req id is ", req.user_id)
        const workout = await Workout.create({ title, reps, load, userId: req.user_id });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.meesage });
    }

}

// Get all workouts
const getAllWorkouts = async (req, res) => {
    const { userId } = req.params;
    try {
        const workouts = await Workout.find({ userId }).sort({ createdAt: -1 });
        if (workouts.length === 0) {
            throw Error("Empty workouts");
        }
        res.status(200).json(workouts);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

// Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ error: "Invalid object ID. check your ID!" });
    }
    try {
        const workout = await Workout.findById(id);
        // const workout = await Workout.findOne({ _id: id });
        if (!workout) {
            return res.status(404).json({ error: "No workout found!" })
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

// Update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    const { title, reps, load } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid object ID. check your ID!" });
    }
    try {
        const workout = await Workout.findByIdAndUpdate(id, { title, reps, load });
        // const workout = await Workout.findByIdAndUpdate(id, { ...req.body });
        if (!workout) {
            return res.status(404).json({ error: "No workout found to update!" })
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

// Delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid object ID. check your ID!" });
    }
    try {
        const workout = await Workout.findByIdAndDelete(id);
        // const workout = await Workout.findOne({ _id: id });
        if (!workout) {
            return res.status(404).json({ error: "No workout found!" })
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    postWorkout,
    getAllWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
};