import {createContext, useState} from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({children}){
    const [theme, setTheme] = useState('light')

    const toggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const value = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}