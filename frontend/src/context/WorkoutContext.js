import { createContext, useReducer } from "react";

export const workoutContext = createContext()

export const workoutsReducer = (state,action)=>{
    switch (action.type){
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                workouts: [action.payload,...state.workouts]
            }
        default :
            return state
    }

}

export const workoutContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(workoutsReducer , {
        workouts : null
    })
    return (
    <workoutContext.Provider value={{state,dispatch}}>
        {children}
    </workoutContext.Provider>
    )
}