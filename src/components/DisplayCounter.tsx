import React, {useEffect, useState} from "react";
import s from "./DisplayCounter.module.css";
import {ButtonCounter} from "./ButtonCounter";


export function DisplayCounter(props: any) {

    // используем хук useState для хранения локального стейта DisplayCounter
    let startValue = props.startValue
    let maxValue = props.maxValue
    let errorValue = props.errorValue
    let onChangeInputValue = props.onChangeInputValue

    let [incValue, setIncValue] = useState(startValue);
    let [incErrValue, setIncErrValue] = useState(errorValue);
    let [incChangeInpValue, setIncChangeInpValue] = useState(onChangeInputValue);

    // рендерит компаненту, как только приходит новое значение startValue или setIncValue
    useEffect(() => {setIncValue(startValue)
    }, [setIncValue, startValue])
    useEffect(() => {setIncErrValue(errorValue)
    }, [setIncErrValue, errorValue])
    useEffect(() => {setIncChangeInpValue(onChangeInputValue)
    }, [setIncChangeInpValue, onChangeInputValue])


    // текущее значение счетчика увеличивается на 1 при нажатии на кнопку
    const currentIncValue = () => {
        if (incValue < maxValue) {
            setIncValue(incValue + 1)
        } else {
            return
        }
    }
    // сброс текущего значения счетчика на стартовое значение startValue в глобальном Стэйте
    const resetValue = () => {
        setIncValue(startValue)
    }
    // отключение кнопок INC и RESET при условиях
    let disabledInc: boolean,
        disabledReset: boolean

    if (incValue === startValue) {
        disabledInc = false;
        disabledReset = true;
    } else if (incValue < maxValue){
        disabledInc = false;
        disabledReset = false;
    } else {
        disabledInc = true;
        disabledReset = false;
    }

    let showErrOrCounter = incValue < maxValue ? incValue : <div className={s.err}> {incValue} </div>
    let setStyle = {marginTop: "130px", fontSize: "30px" }
    let errStyle = {color: "red", marginTop: "130px", fontSize: "30px" }

    // УСЛОВИЕ... КАКОЙ JSX ВЫБРОСИТ Ф-ЦИЯ
    // если из стейта придет значение изменения в инпутах и значение ОШИБКИ на инпутах не будет,
    // тогда отбрази DisplayNormal
    if (incChangeInpValue && !incErrValue) {
        return <DisplayInputValue/>
    } else {
        return <DisplayNormal/>
    }


    function DisplayInputValue() {
        return (
            <div className={s.DisplayCounter}>
                <div className={s.DisplayCounterView}>
                        <div style={setStyle}>ENTER VALUES and PUSH "SET"</div>
                </div>
                <ButtonCounter currentIncValue={currentIncValue}
                               resetValue={resetValue}
                               disabledReset={disabledReset}
                               disabledInc={disabledInc}
                />
            </div>
        )
    }
    function DisplayNormal() {
        return (
            <div className={s.DisplayCounter}>
                <div className={s.DisplayCounterView}>
                    {incErrValue
                        ? <div style={errStyle}>INCORRECT VALUE !</div>
                        : <div className={s.count}>
                            {showErrOrCounter}
                        </div>
                    }
                </div>
                <ButtonCounter currentIncValue={currentIncValue}
                               resetValue={resetValue}
                               disabledReset={disabledReset}
                               disabledInc={disabledInc}
                />
            </div>
        )
    }
}
