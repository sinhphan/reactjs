import { constants } from ".";

export const updateInput = payload => {
    return {
        type : constants.UPDATE_INPUT,
        payload
    }
}

export const addTodo = payload => {
    return {
        type : constants.ADD_TODO,
        payload
    }
}

export const updateTodo = payload => {
    return {
        type : constants.UPDATE_TODO,
        payload
    }
}

export const deleteTodo = payload => {
    return {
        type : constants.DELETE_TODO,
        payload
    }
}