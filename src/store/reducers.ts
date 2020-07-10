import {actionsType} from "./actions"

type stateType = {
    startValue: number
    maxValue: number
}

const initialState = {
    startValue: 0,
    maxValue: 5
}

export const counterReducer = (state: stateType = initialState, action: actionsType): stateType => {
    switch (action.type) {
        case "CHANGE_START_VALUE":
            return {...state, startValue: action.startValue}
        case "CHANGE_MAX_VALUE":
            return {...state, startValue: action.maxValue}
        default:
            return state
    }
}


export default 1
