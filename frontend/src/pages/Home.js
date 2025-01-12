import { useEffect, useState } from "react";
// components
import WorkoutDetails from "../components/workoutDetails" 
import WorkoutForm from "../components/WorkoutForm";
const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/workouts');
            const json = await response.json();

            if (response.ok) {
                setWorkouts(json);
            }
        };

        fetchWorkout();
    }, []);

    return (
        <div className="home">
            <div className="workouts">
                {workouts &&
                    workouts.map((workout) => (
                        <WorkoutDetails workout={workout} key={workout._id} />
                    ))}
            </div>
            <WorkoutForm/>
        </div>
    );
};

export default Home;
