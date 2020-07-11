import {actionsType} from "./actions"

type stateType = {
    startValue: number
    maxValue: number
}

const initialState = {
    startValue: 0,
    maxValue: 5
}
//создаем обобщенный тип для State, который будет генерироваться автоматически при дальнейшем редактировании редьюсера
export type rootStateType = ReturnType<typeof counterReducer>

export const counterReducer = (state: stateType = initialState, action: actionsType): stateType => {
    switch (action.type) {
        case "CHANGE_START_VALUE":
            return {...state, startValue: action.startValue}
        case "CHANGE_MAX_VALUE":
            return {...state, maxValue: action.maxValue}
        default:
            return state
    }
}

