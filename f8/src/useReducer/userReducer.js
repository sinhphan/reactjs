import {useReducer,useRef} from 'react'
import {setJob,addJob,deleteJob} from './actions.js'
import reducer, {initState} from './reducer.js'
/**
 * @useState
 * ! 1 init State = ?
 * ! 2 Action for handle State
 * 
 * 
 * 
 * @useReducer
 * ! 1. init state = ? 
 * ! 2. Action for handle
 * ! 3. create Reducer
 * ! 4. dispatch
 */




export default function ToDoReducer(){
    const [state, dispatch] = useReducer(reducer, initState)
    const {job,jobs} = state
    const inputRef = useRef()

    // console.log(state)

    const handleInputChange = e=>{
        dispatch(setJob(e.target.value))
    }

    const handleAddClick = ()=>{
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    const handleDelete = (e)=>{
        dispatch(deleteJob(e.target.dataset.index))
    }

    return (
        <div className='todoreducer-warp' style={{padding:20 }}>
            <h2>TODO</h2>
            <div>
                <input 
                    ref={inputRef}
                    type='text' 
                    value={job}
                    placeholder="Enter todo"
                    onChange={handleInputChange}
                />
                <button
                    onClick={handleAddClick}
                >Add</button>
            </div>
            <ul>
                {jobs.map((job, id)=>(
                    <li key ={id}>
                        {job}
                        <button 
                            data-index = {id}
                            onClick = {handleDelete}
                        >delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
