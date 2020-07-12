export const CHANGE_START_VALUE = "CHANGE_START_VALUE"
export const CHANGE_MAX_VALUE = "CHANGE_MAX_VALUE"
export const ERROR_VALUE = "ERROR_VALUE"

type changeStartValueType = {
    type: "CHANGE_START_VALUE"
    startValue: number
}
type changeMaxValueType = {
    type: "CHANGE_MAX_VALUE"
    maxValue: number
}
type changeErrorValueType = {
    type: "ERROR_VALUE"
    errorValue: boolean
}
// создаем обобщенный тип экшенов
export type actionsType = changeStartValueType | changeMaxValueType | changeErrorValueType

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
export const changeErrorValueAC = (newErrorValue: boolean) => {
    return {
        type: ERROR_VALUE,
        errorValue: newErrorValue
    }
}
