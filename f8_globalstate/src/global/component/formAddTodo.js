import {actions} from '../logical/'
import {useTodoContext} from '../'

function FormAddTodo(){
    const [state,dispatch] = useTodoContext()
    const handleInputChange = (e)=>{
        dispatch(actions.updateInput(e.target.value))
    }

    const handleAdd = ()=>{
        dispatch(actions.addTodo(state.inputTodo))
        dispatch(actions.updateInput(''))
    }

    const handleKeydown = (e)=>{
        if(e.key == 'Enter') handleAdd()
    }

    return (
        <div className="todos-form">
            <input 
                type='text'
                value={state.inputTodo}
                onKeyDown={handleKeydown}
                onChange={handleInputChange}
            />
            <button
                onClick={handleAdd}
            >Add</button>
        </div>
    )
}

export default FormAddTodo