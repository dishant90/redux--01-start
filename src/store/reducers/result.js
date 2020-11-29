import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedResult = state.results.filter(result => result.id !== action.resultElId)
    return updateObject(state, {results: updatedResult} )
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})} )
                /* Do not use array push method as that would mutate the existing state which is a bad practise with respect to
                state management */
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action)
        default:
            return state;
    }
}

export default reducer;