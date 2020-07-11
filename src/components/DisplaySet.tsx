import React from "react";
import s from "./DisplaySet.module.css";
import {ButtonSet} from "./ButtonSet";
import {useDispatch, useSelector} from "react-redux";
import {changeMaxValueAC, changeStartValueAC} from "../store/actions";
import {rootStateType} from "../store/reducers";


export function DisplaySet(props: any) {

    // с помощью хука useDispatch передаем значения в state (Redux) напрямую
    const dispatch = useDispatch()
    const changeStartValue = (newStartValue: string) => {
        const action = changeStartValueAC(+newStartValue)
        dispatch(action)
    }
    const changeMaxValue = (newMaxValue: string) => {
        const action = changeMaxValueAC(+newMaxValue)
        dispatch(action)
    }

    // с помощью хука useSelector достаем значения из state (Redux) напрямую
    const startValue = useSelector<rootStateType, number>((state) => state.startValue)
    const maxValue = useSelector<rootStateType, number>((state) => state.maxValue)

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
                           value={maxValue}
                           onChange={(e) => {changeMaxValue(e.target.value)}}
                    />
                    <input className={s.input}
                           type="number"
                           value={startValue}
                           onChange={(e) => {changeStartValue(e.target.value)}}
                    />
                </div>
            </div>
            <ButtonSet/>
        </div>
    )
}
