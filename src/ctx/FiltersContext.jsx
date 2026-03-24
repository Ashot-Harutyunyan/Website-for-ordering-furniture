import { createContext, use, useState, useMemo, useCallback } from "react"

const FiltersCTX = createContext(null)

const getInitialCategory = () => {
    try {
        return localStorage.getItem("category") || "all"
    } catch {
        return "all"
    }
}

export default function FiltersContext({ children }) {

    const [category, setCategory] = useState(getInitialCategory)

    const handleCategory = useCallback((id) => {
        localStorage.setItem("category", id)
        setCategory(id)
    }, [])

    const value = useMemo(
        () => [category, handleCategory],
        [category, handleCategory]
    )

    return (<FiltersCTX value={value}>{children}</FiltersCTX>)
}

export const useFilters = () => use(FiltersCTX)