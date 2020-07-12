import {actionsType} from "./actions"

type stateType = {
    startValue: number
    maxValue: number
    errorValue: boolean
    onChangeInputValue: boolean
}

const initialState = {
    startValue: 0,
    maxValue: 5,
    errorValue: false,
    onChangeInputValue: false,
}
//создаем обобщенный тип для State, который будет генерироваться автоматически при дальнейшем редактировании редьюсера
export type rootStateType = ReturnType<typeof counterReducer>

export const counterReducer = (state: stateType = initialState, action: actionsType): stateType => {
    switch (action.type) {
        case "CHANGE_START_VALUE":
            return {...state, startValue: action.startValue}
        case "CHANGE_MAX_VALUE":
            return {...state, maxValue: action.maxValue}
        case "ERROR_VALUE":
            return {...state, errorValue: action.errorValue}
        case "ON_CHANGE_INPUT":
            return {...state, onChangeInputValue: action.onChangeInputValue}
        default:
            return state
    }
}

