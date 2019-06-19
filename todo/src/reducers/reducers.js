import { combineReducers } from 'redux';
import * as actions from '../actions/actions';

export function todoReducer(state = [], action) {
    switch(action.type) {
        case (actions.ADD_TODO):
            return [...state, action.payload];
        case (actions.DELETE_TODO):
            return state.filter(todo => todo.id !== action.payload);
        case (actions.COMPLETE_TODO):
            return state.map(todo => {
                if (todo.id === action.payload){
                    const newTodo = {...todo};
                    newTodo.completed = !todo.completed;
                    return newTodo;
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }
}

export const combinedReducers = combineReducers({
    todos: todoReducer,
});