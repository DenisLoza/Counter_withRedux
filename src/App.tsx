import React from 'react';
import './App.css';
import {DisplaySet} from "./components/DisplaySet";
import {DisplayCounter} from "./components/DisplayCounter";
import {useDispatch, useSelector} from "react-redux";
import {changeErrorValueAC, changeMaxValueAC, changeStartValueAC} from "./store/actions";
import {rootStateType} from "./store/reducers";


function App() {

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
    const changeErrorValue = (newErrorValue: boolean) => {
        const action = changeErrorValueAC(newErrorValue)
        dispatch(action)
    }

    // с помощью хука useSelector достаем значения из state (Redux) напрямую
    const startValue = useSelector<rootStateType, number>((state) => state.startValue)
    const maxValue = useSelector<rootStateType, number>((state) => state.maxValue)
    const errorValue = useSelector<rootStateType, boolean>((state) => state.errorValue)
    // const errorValue = useSelector<rootStateType, boolean>((state) => state.errorValue)

  return (
      <div className="App">
        <DisplaySet startValue={startValue}
                    maxValue={maxValue}
                    changeStartValue={changeStartValue}
                    changeMaxValue={changeMaxValue}
                    changeErrorValue={changeErrorValue}
                    // errorValue={errorValue}
        />
        <DisplayCounter startValue={startValue}
                        maxValue={maxValue}
                        errorValue={errorValue}
        />
      </div>
  );
}

export default App;
