import {INCREMENT,DECREMENT} from '../action/action-types'



export const incrementCounter = () => {
    return {
        type : INCREMENT
    }
}

export const decrementCounter = () => {
    return {
        type : DECREMENT
    }
}