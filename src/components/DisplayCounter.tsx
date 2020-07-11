import React, {useEffect, useState} from "react";
import s from "./DisplayCounter.module.css";
import {ButtonCounter} from "./ButtonCounter";


export function DisplayCounter(props: any) {

    // используем хук useState для хранения локального стейта DisplayCounter
    let startValue = props.startValue
    let maxValue = props.maxValue
    let [incValue, setIncValue] = useState(startValue);
    // let [currentMaxValue, setCurrentMaxValue] = useState(maxValue)

    // рендерит компаненту, как только приходит новое значение startValue или setIncValue
    useEffect(() => {setIncValue(startValue)
    }, [setIncValue, startValue])

    // текущее значение счетчика увеличивается на 1 при нажатии на кнопку
    const currentIncValue = () => {
        incValue < maxValue
            ? setIncValue(incValue + 1)
            : setIncValue(incValue)

    }
    // сброс текущего значения счетчика на стартовое значение startValue в глобальном Стэйте
    const resetValue = () => {
        setIncValue(startValue)
    }


    return (
        <div className={s.DisplayCounter}>
            <div className={s.DisplayCounterView}>
                <div className={s.count}> {incValue} </div>
            </div>
            <ButtonCounter currentIncValue={currentIncValue}
                           resetValue={resetValue}
            />
        </div>
    )
}
