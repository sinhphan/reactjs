import { useReducer } from "react";
import {todoReducer, initTodos} from './logical'

import GlobalContext from "./globalContext";
import logger from "./logical/logger";



function GlobalProvider({children}){
    const [todos,dispatch] = useReducer(logger(todoReducer),initTodos)

    return (
        <GlobalContext.Provider value = {[todos,dispatch]}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider