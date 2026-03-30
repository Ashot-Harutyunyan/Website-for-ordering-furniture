import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getFurniture } from '../../firebase/firebase.js'
import { NUMBERS } from '../../constants.js'

export default function useSingleProductQuery(currentCode, id) {
    const queryClient = useQueryClient()
    return useQuery({
        queryFn: async () => {
            const cached = queryClient.getQueryData(['catalog page of furniture', currentCode])
            const response = cached ?? await getFurniture(currentCode)

            const separateFurniture = response.find(item => String(item.id) === String(id))

            const offerFurniture = response
                .filter(item => String(item.id) !== String(id))
                .sort(() => Math.random() - 0.5)
                .slice(0, NUMBERS.numberOfRandomFurnitureOffers)

            return { separateFurniture, offerFurniture }
        },
        queryKey: ['single product page of furniture', currentCode, id],
    })
}