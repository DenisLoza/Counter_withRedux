export const CHANGE_START_VALUE = "CHANGE_START_VALUE"
export const CHANGE_MAX_VALUE = "CHANGE_MAX_VALUE"
export const ERROR_VALUE = "ERROR_VALUE"
export const ON_CHANGE_INPUT = "ON_CHANGE_INPUT"

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
type changeInputType = {
    type: "ON_CHANGE_INPUT"
    onChangeInputValue: boolean
}
// создаем обобщенный тип экшенов
export type actionsType = changeStartValueType | changeMaxValueType
    | changeErrorValueType | changeInputType

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
export const changeInputAC = (newOnChangeInputValue: boolean) => {
    return {
        type: ON_CHANGE_INPUT,
        onChangeInputValue: newOnChangeInputValue
    }
}
