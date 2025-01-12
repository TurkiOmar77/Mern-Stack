const Workout = require('../modles/WorkoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req ,res) =>{
    const workouts = await Workout.find({}).sort({createdAt : -1})

    res.status(200).json(workouts)
}


// get a single workout
const getWorkout = async (req ,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(200).json({error : "No such workot"})
    }

    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error : "No such workout"})
    }

    res.status(200).json(workout)
}

//create new workout
const cteateWorkout = async(req , res ) =>{
    // add doc to db 
    const {title , reps , load } = req.body
    try{
        const workout = await Workout.create({title ,reps ,load})
        res.status(200).json(workout)

    }catch (error){
        res.status(400).json({error : error.message})
    }
}

//delete a workout 
const deleteWorkot = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "Nn such workout"})
    }

    const workout = await Workout.findByIdAndDelete({_id : id})

    if(!workout){
        return res.status(404).json({error : "No such workout"})
    }

    res.status(200).json(workout)
}

//update a workout
const updateWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No such workout"})
    }


    const workout = await Workout.findByIdAndUpdate({_id : id },{
       ...req.body
    })

    if(!workout){
        return res.status(404).json({error : "No such workout"})
    }

    res.status(200).json(workout)
}

module.exports = {
    getWorkouts,
    getWorkout,
    cteateWorkout,
    deleteWorkot,
    updateWorkout
}