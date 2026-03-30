import './singleProductInfoLoading.style.scss'
import ComponentLoading from '../ComponentLoading/ComponentLoading.jsx'
import { useLoadingArray } from "../../hooks/useLoadingArray.js"
import { NUMBERS } from "../../../constants.js"

function SingleProductInfoLoading() {

    const loadingArray = useLoadingArray(NUMBERS.singleProductInfoArrayLoading)

    return (<div className="single-product-container-info-loading">
        {loadingArray.map((item, index) => (
            <ComponentLoading key={index} />
        ))}
    </div>)
}

export default SingleProductInfoLoading