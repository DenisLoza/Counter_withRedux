import React from "react";
import s from "./ButtonSet.module.css";

export function ButtonSet(props: any) {

    const setValues = () => {

    }

    return (
        <div className={s.ButtonSet}>
            <button className={s.button}
                    onClick={setValues}>
                SET
            </button>
        </div>
    )
}
