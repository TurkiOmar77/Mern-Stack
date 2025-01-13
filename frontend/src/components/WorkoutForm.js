import {useState} from 'react'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext()
    const [title,setTitle] = useState("")
    const [reps,setReps] = useState("")
    const [load,setLoad] = useState("")
    const [error,setError] = useState("")
    const [empityFieled,setEmpityFieled] = useState([])

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const workout = {title , reps , load}
        const response = await fetch('/api/workouts',{
            method : 'POST',
            body : JSON.stringify(workout),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
            setEmpityFieled(json.empityFieled)
        }
        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setEmpityFieled([])
            setError(null)
            console.log("new workout added",json)
            dispatch({type : "CREATE_WORKOUT",payload : json})
        }
    }
    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new workout</h3>

            <label>Excersiz Title : </label>
            <input type="text"
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
            className={empityFieled.includes('title') ? 'error' : ''}
            />
            <label>Load (kg) : </label>
            <input type="number"
            onChange={(e)=> setLoad(e.target.value)}
            value={load}
            className={empityFieled.includes('load') ? 'error' : ''}

            />
            <label>Reps : </label>
            <input type="number"
            onChange={(e)=> setReps(e.target.value)}
            value={reps}
            className={empityFieled.includes('reps') ? 'error' : ''}

            />

            <button>Add workout</button>
            {error && <div className='error'>{error}</div>}
        </form>
     );
}
 
export default WorkoutForm;