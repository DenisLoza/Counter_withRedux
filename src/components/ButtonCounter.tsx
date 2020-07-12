import React from "react";
import s from "./ButtonCounter.module.css";

export function ButtonCounter(props: any) {

    let styleInc = props.disabledInc === true ? {cursor: "default"} : {}
    let styleReset = props.disabledReset === true ? {cursor: "default"} : {}

    return (
        <div className={s.ButtonCounter}>
            <button className={s.buttonInc}
                    style={styleInc}
                    onClick={props.currentIncValue}
                    disabled={props.disabledInc}>
                INC
            </button>
            <button className={s.buttonReset}
                    style={styleReset}
                    onClick={props.resetValue}
                    disabled={props.disabledReset}>
                RESET
            </button>
        </div>
    )
}
