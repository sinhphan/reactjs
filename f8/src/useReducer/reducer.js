import { SET_JOB,ADD_JOB,DELETE_JOB } from './constants.js'
// init state = ? 
export const initState = {
    job : '',
    jobs : []
}

// create Reducer
const reducer = (state, action)=>{


    switch (action.type) {
        case SET_JOB:
           return {
                ...state,
                job : action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                 jobs : [...state.jobs,action.payload]
                }   
        case DELETE_JOB:

            let deletedJobs = state.jobs.filter((job,index)=>index!==Number(action.payload))
            return {
                ...state,
                jobs : deletedJobs
            }

        default:
            throw new Error('Invalid Action')
    }
}

export default reducer