import { useContext } from "react";
import GlobalContext from "./globalContext";

function useTodoContext(){
    return useContext(GlobalContext)
}

export default useTodoContext