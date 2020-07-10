import {createStore} from "redux"
import {counterReducer} from "./reducers"


// создаем стор и передаем туда редьюсер
export const store = createStore(counterReducer)

// @ts-ignore
window.store = store
