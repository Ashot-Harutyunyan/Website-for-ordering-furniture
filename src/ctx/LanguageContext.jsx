import { createContext, use, useState, useMemo, useCallback } from "react"
import { language } from '../language.js'

const LanguageCTX = createContext(null)

const getInitialLang = () => {
    try {
        const saved = localStorage.getItem("language")
        return {
            data: language[saved] ?? language.ARM,
            code: saved && language[saved] ? saved : "ARM"
        }
    } catch {
        return { data: language.ARM, code: "ARM" }
    }
}

export default function LanguageContext({ children }) {
    const initial = getInitialLang()
    const [lang, setLang] = useState(initial.data)
    const [currentCode, setCurrentCode] = useState(initial.code)

    const handleLang = useCallback((newLang) => {
        if (!language[newLang]) return
        try {
            localStorage.setItem("language", newLang)
        } catch {}
        setLang(language[newLang])
        setCurrentCode(newLang)
    }, [])

    const value = useMemo(
        () => [lang, currentCode, handleLang],
        [lang, currentCode, handleLang]
    )

    return <LanguageCTX value={value}>{children}</LanguageCTX>
}

export const useLanguage = () => use(LanguageCTX)