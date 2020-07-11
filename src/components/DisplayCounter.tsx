import React from "react";
import s from "./DisplayCounter.module.css";
import {ButtonCounter} from "./ButtonCounter";
import {useSelector} from "react-redux";
import {rootStateType} from "../store/reducers";

export function DisplayCounter(props: any) {

    // с помощью хука useSelector достаем значения из state (Redux) напрямую
    const startValue = useSelector<rootStateType, number>((state) => state.startValue)

    const addItem =()=> {
        // code
    }

    return (
        <div className={s.DisplayCounter}>
            <div className={s.DisplayCounterView}>
                <div className={s.count}> {startValue} </div>
            </div>
            <ButtonCounter addItem={addItem}/>
        </div>
    )
}
