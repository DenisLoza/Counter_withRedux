import React from "react";
import s from "./ButtonCounter.module.css";

export function ButtonCounter(props: any) {

  /*  const incValues = () => {
        console.log("click inc button")
    }
    const resetValues = () => {
        console.log("click reset button")
    }
*/
    return (
        <div className={s.ButtonCounter}>
            <button className={s.buttonInc}
                    onClick={props.incValues}>
                INC
            </button>
            <button className={s.buttonReset}
                    onClick={props.resetValues}>
                RESET
            </button>
        </div>
    )
}
