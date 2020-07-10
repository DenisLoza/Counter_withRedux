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
export type actionsType = changeStartValueType | changeMaxValueType

export const changeStartValue = (newStartValue: number) => {
    return {
        type: CHANGE_START_VALUE,
        startValue: newStartValue
    }
}
export const changeMaxValue = (newMaxValue: number) => {
    return {
        type: CHANGE_MAX_VALUE,
        maxValue: newMaxValue
    }
}

export default 1
