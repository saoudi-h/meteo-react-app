import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
  clearTheme: () => void
}

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemTheme = (): Theme =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const storedTheme = (): Theme => localStorage.getItem('theme') as Theme

  const [theme, setTheme] = useState<Theme>(() => {
    return storedTheme() ? storedTheme() : systemTheme()
  })

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const clearTheme = () => {
    setTheme(systemTheme())
    localStorage.removeItem('theme')
  }

  useEffect(() => {
    setTheme((prevTheme) =>
      prevTheme === 'light' || prevTheme === 'dark' ? prevTheme : systemTheme()
    )
  }, [])

  // add dark class to body (extern to context)
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, clearTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
