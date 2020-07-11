import React, {useState} from "react";
import s from "./DisplaySet.module.css";
import {ButtonSet} from "./ButtonSet";

export function DisplaySet(props: any) {

    // используем хук useState для хранения локального стейта DisplaySet
    let startValue = props.startValue
    let maxValue = props.maxValue
    let [currentStartValue, setCurrentStartValue] = useState(startValue)
    let [currentMaxValue, setCurrentMaxValue] = useState(maxValue)


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
                    />
                    <input className={s.input}
                           type="number"
                           value={currentStartValue}
                           onChange={setStartValue}
                    />
                </div>
            </div>
            <ButtonSet setValue={setValue}
            />
        </div>
    )
}
