require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRouter = require('./routes/workouts')


const app = express()

// maddleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//routes
app.use('/api/workouts',workoutRouter)

//connect to db 
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("connection and listeneing on port",process.env.PORT)
        })
    })
    .catch((err)=>{
        console.log('Database connection error:',err)
    })



