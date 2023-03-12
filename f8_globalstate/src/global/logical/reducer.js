import { constants } from ".";
export const initTodos = {
    inputTodo : '',
    todos: []
}

function todoReducer(state, action){
    switch (action.type) {
        case constants.UPDATE_INPUT:
            return {
                ...state,
                inputTodo : action.payload
            }
        case constants.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos,action.payload]
            }
        case constants.UPDATE_TODO:
            state.todos[action.payload.todoId] = action.payload.todo
            return {
                ...state
            }
        case constants.DELETE_TODO:
            let todos = state.todos.filter((todo,id)=>id !== action.payload)
            return {
                ...state,
                todos: todos
            }
        default:
            throw new Error('Not Type in valid')
    }
}

export default todoReducer