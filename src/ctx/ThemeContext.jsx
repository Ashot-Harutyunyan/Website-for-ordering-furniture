import { createContext, use, useState, useEffect } from "react"

const ThemeContextCTX  = createContext(null);

export default function ThemeContext({ children }) {

    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "dark"
    )

    const toggleTheme = () => setTheme(t => {
        const next = t === "light" ? "dark" : "light"
        localStorage.setItem("theme", next)
        return next
    })

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
        document.documentElement.classList.toggle("light", theme === "light")
    },[theme])

   return <ThemeContextCTX value={[theme, toggleTheme]}>{children}</ThemeContextCTX>

}

export const useTheme = () => use(ThemeContextCTX)