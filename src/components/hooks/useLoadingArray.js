import { useMemo } from "react"

export function useLoadingArray(count = 0) {
    return useMemo(() => {
        return new Array(count).fill(null)
    }, [count])
}