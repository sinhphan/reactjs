import {useState,useRef} from 'react'

import { deleteTodo, updateTodo } from "../logical/actions"
import useTodoContext from "../useTodoContext"
import ButtonGroup from './buttongroup'

function ListTodos(){
    const [state, dispatch] = useTodoContext()
    const [changing, setChanging] = useState({changing:false,todoId:1,todo:''})

    const changeInputRef = useRef()

    const handleDelete = (e)=>{
        dispatch(deleteTodo(Number(e.target.dataset.todoid)))
        setChanging({
            changing: false, 
            })

    }

    const handleChangeBtn = (e)=>{
        const todoId = Number(e.target.dataset.todoid)
        if(!changing.changing){
        setChanging({
            changing: true, 
            todoId: todoId,
            todo: state.todos[todoId]
        })
        }else{
            setChanging({
                changing: false, 
                })
            dispatch(updateTodo({
                todoId,
                todo: changeInputRef.current.value}))
        }
    }

    const handleChange = e=>{
        setChanging({
            changing:true,
            todo: e.target.value
        })
        console.log(10);
    }

    return (
        <div className="todos-list">
            <ul>
                {state.todos.map((todo,todoId)=>{
                    todo = (changing.changing && changing.todoId == todoId) ?
                        (<input 
                            value={changing.todo} 
                            onChange={handleChange} 
                            ref={changeInputRef}
                            autoFocus
                        />) :todo

                    return (                 
                        <li key={todoId}>
                            {todo}
                            <ButtonGroup 
                                todoId={todoId} 
                                handleChange={handleChangeBtn} 
                                handleDelete={handleDelete} 
                            />
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default ListTodos