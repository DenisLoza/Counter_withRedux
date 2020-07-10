import React from "react";
import s from "./DisplaySet.module.css";
import {ButtonSet} from "./ButtonSet";

export function DisplaySet(props: any) {
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
                    />
                    <input className={s.input}
                           type="number"
                    />
                </div>
            </div>
            <ButtonSet/>
        </div>
    )
}
