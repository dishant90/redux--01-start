import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            /* // first approach to update the state immutably
            const newState = Object.assign({}, state) // first level cloning (not the deep level cloning)
            newState.counter = state.counter + 1
            return newState; */
            return updateObject(state, {counter: state.counter + 1} )
        case actionTypes.DECREMENT:
            /* //second approach to update the state immutably
            return {
                ...state, // first level cloning using the spread operator to distribute the existing object values in the new object
                counter: state.counter - 1
            } */
            return updateObject(state, {counter: state.counter - 1} )
        case actionTypes.ADDITION:
            return updateObject(state, {counter: state.counter + action.value} )
        case actionTypes.SUBTRACTION:
            return updateObject(state, {counter: state.counter - action.value} )
        default:
            return state;
    }
}

export default reducer;