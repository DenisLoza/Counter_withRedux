import React from "react";
import s from "./DisplayCounter.module.css";
import {ButtonCounter} from "./ButtonCounter";

export function DisplayCounter(props: any) {
    return (
        <div className={s.DisplayCounter}>
            <div className={s.DisplayCounterView}>
                <div className={s.count}>
                    5
                </div>
            </div>
            <ButtonCounter/>
        </div>
    )
}
