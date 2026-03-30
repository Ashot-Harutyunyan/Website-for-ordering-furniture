import { useQuery } from "@tanstack/react-query"
import { getFurniture } from '../../firebase/firebase.js'

export default function useCatalogQuery(currentCode) {
    return useQuery({
        queryFn: () => getFurniture(currentCode),
        queryKey: ['catalog page of furniture', currentCode],
    })
}