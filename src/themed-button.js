import React,{ useContext } from "react";
import { ThemeContext } from "./theme-context";


function ThemedButton(){
    const { theme } = useContext(ThemeContext);

    return(
        <button style={{backgroundColor:theme.background,color:theme.foreground}}>themed button</button>
    )
}

export default ThemedButton;