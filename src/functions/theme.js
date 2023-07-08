import { createContext } from "react";
import { useState } from "react";

const mode = () => {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('light');
            return;
        }

        setTheme('dark');
    }

    return [theme, changeTheme];
}


export default mode;
