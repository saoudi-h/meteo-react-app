import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

const ToggleTheme: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

export default ToggleTheme;