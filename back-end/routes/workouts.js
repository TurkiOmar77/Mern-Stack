const express = require('express')
const {
    getWorkouts,
    getWorkout,
    cteateWorkout,
    deleteWorkot,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//get all worksouots
router.get('/', getWorkouts)
// get single workout
router.get('/:id', getWorkout)
// post a new workout
router.post('/', cteateWorkout)
// Delete a workout
router.delete('/:id',deleteWorkot)
//  update a workout
router.patch('/:id',updateWorkout)

module.exports = router