import React from "react";
import s from "./ButtonCounter.module.css";

export function ButtonCounter(props: any) {
    return (
        <div className={s.ButtonCounter}>
            <button className={s.buttonInc}>
                INC
            </button>
            <button className={s.buttonReset}>
                RESET
            </button>
        </div>
    )
}
