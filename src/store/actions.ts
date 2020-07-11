export const CHANGE_START_VALUE = "CHANGE_START_VALUE"
export const CHANGE_MAX_VALUE = "CHANGE_MAX_VALUE"

type changeStartValueType = {
    type: "CHANGE_START_VALUE"
    startValue: number
}
type changeMaxValueType = {
    type: "CHANGE_MAX_VALUE"
    maxValue: number
}
// создаем обобщенный тип экшенов
export type actionsType = changeStartValueType | changeMaxValueType

export const changeStartValueAC = (newStartValue: number) => {
    return {
        type: CHANGE_START_VALUE,
        startValue: newStartValue
    }
}
export const changeMaxValueAC = (newMaxValue: number) => {
    return {
        type: CHANGE_MAX_VALUE,
        maxValue: newMaxValue
    }
}

