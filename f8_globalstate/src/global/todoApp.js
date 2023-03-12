import {FormAddTodo,ListTodos} from "./component";


import './css/todo.css'

function ToDosApp(){

    return (
        <div className="todos-wrap">
            <FormAddTodo />
            <ListTodos />
        </div>
    )
}


export default ToDosApp