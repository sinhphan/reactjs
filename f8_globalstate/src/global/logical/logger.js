import todoReducer from "./reducer"

function logger(todoReducer){

    return (prestate,action)=>{
        console.group("Action: ", action.type)
        console.log("PreState: ", prestate)
        
        const nextState = todoReducer(prestate,action)
        console.log("Next State ", nextState)
        console.groupEnd()
        return nextState
    }
}

export default logger