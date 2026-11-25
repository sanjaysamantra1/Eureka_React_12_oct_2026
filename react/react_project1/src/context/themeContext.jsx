import { createContext,useState } from "react";

export const ThemeContext = createContext(); // create a context

export const ThemeProvider = ({ children }) => {  // create a Provider
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prev) => {
            return prev === 'light' ? 'dark' : 'light';
        })
    }
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}