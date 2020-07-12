import React from "react";
import s from "./ButtonSet.module.css";


export function ButtonSet(props: any) {

    return (
        <div className={s.ButtonSet}>
            <button className={s.button}
                    onClick={props.setValue}
                    disabled={props.errorValue}>
                SET
            </button>
        </div>
    )
}
