import uuid from 'uuid/v4';
import * as actions from '../actions/actions';
export function addTodo(task) {
    return {
        type: actions.ADD_TODO,
        payload: {
            id: uuid(),
            task,
            completed: false,
        },
    }
}

export function completeTodo(id) {
    return {
        type: actions.COMPLETE_TODO,
        payload: id,
    }
}

export function deleteTask(id) {
    return {
        type:  actions.DELETE_TODO,
        payload: id,
    }
}