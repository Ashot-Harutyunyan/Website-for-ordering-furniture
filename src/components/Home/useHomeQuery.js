import { useQuery } from "@tanstack/react-query"
import { getFurniture } from '../../firebase/firebase.js'

export function useHomeQuery(currentCode){
    return useQuery({
        queryFn: () =>  getFurniture(currentCode),
        queryKey: ["home page of furniture", currentCode],
    })
}