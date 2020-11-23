import * as actionTypes from '../actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
                /* Do not use array push method as that would mutate the existing state which is a bad practise with respect to
                state management */
            }
        case actionTypes.DELETE_RESULT:
            const updatedResult = state.results.filter(result => result.id !== action.resultElId)
            return {
                ...state,
                results: updatedResult
            }
    }
    return state;
}

export default reducer;