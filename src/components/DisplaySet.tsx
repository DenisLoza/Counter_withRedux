import React, {useState} from "react";
import s from "./DisplaySet.module.css";
import {ButtonSet} from "./ButtonSet";

export function DisplaySet(props: any) {

    // используем хук useState для хранения локального стейта DisplaySet
    let startValue = props.startValue
    let maxValue = props.maxValue
    let [currentStartValue, setCurrentStartValue] = useState(startValue)
    let [currentMaxValue, setCurrentMaxValue] = useState(maxValue)

    let startValueInputStyle = {}
    let maxValueInputStyle = {}
        // проверки на ошибочные значения при вводе
    let errorValue: boolean
    if (currentStartValue < 0) {
        errorValue = true
        startValueInputStyle = {backgroundColor: "salmon"}
    } else if (currentMaxValue <= currentStartValue) {
        errorValue = true
        maxValueInputStyle = {backgroundColor: "salmon"}
        startValueInputStyle = {backgroundColor: "salmon"}
    } else {
        errorValue = false
    }

    // отправляем значение ошибки в глобальный стейт
    props.changeErrorValue(errorValue)


    const setStartValue = (props: any) => {
        setCurrentStartValue(props.target.value)
    }
    const setMaxValue = (props: any) => {
        setCurrentMaxValue(props.target.value)
    }
    const setValue = () => {
        props.changeStartValue(currentStartValue)
        props.changeMaxValue(currentMaxValue)
    }


    return (
        <div className={s.DisplaySet}>
            <div className={s.DisplaySetView}>
                <div className={s.valueText}>
                    <div className={s.value}>
                        MAX VALUE:
                    </div>
                    <div className={s.value}>
                        START VALUE:
                    </div>
                </div>

                <div className={s.inputArea}>
                    <input className={s.input}
                           type="number"
                           value={currentMaxValue}
                           onChange={setMaxValue}
                           style={maxValueInputStyle}
                    />
                    <input className={s.input}
                           type="number"
                           value={currentStartValue}
                           onChange={setStartValue}
                           style={startValueInputStyle}
                    />
                </div>
            </div>
            <ButtonSet setValue={setValue}
                       errorValue={errorValue}
            />
        </div>
    )
}
