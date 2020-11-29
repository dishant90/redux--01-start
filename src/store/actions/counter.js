import * as actionTypes from './actionTypes'

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const addition = (inputVal) => {
    return {
        type: actionTypes.ADDITION,
        value: inputVal
    }
}

export const subtraction = (inputVal) => {
    return {
        type: actionTypes.SUBTRACTION,
        value: inputVal
    }
}