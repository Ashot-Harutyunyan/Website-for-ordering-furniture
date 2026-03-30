import './singleProduct.style.scss'
import { useParams } from "react-router"
import useSingleProductQuery from './useSingleProductQuery.js'
import { useLanguage } from "../../ctx/LanguageContext.jsx"
import SingleProductSlider from "../SingleProductSlider/SingleProductSlider"
import SingleProductInfo from "../SingleProductInfo/SingleProductInfo"
import { useLoadingArray } from "../hooks/useLoadingArray.js"
import { NUMBERS } from "../../constants.js"
import IconCard from "../IconCard/IconCard.jsx"
import SingleProductInfoLoading from "../Loading/SingleProductInfoLoading/SingleProductInfoLoading.jsx"
import RecommendedFurniture from "../RecommendedFurniture/RecommendedFurniture.jsx"
import QueryError from "../Errors/QueryError/QueryError.jsx"

function SingleProduct() {

    const { id } = useParams()
    const [ lang, currentCode ] = useLanguage()

    const { data, isLoading, error } = useSingleProductQuery(currentCode, id)
    const loadingArray = useLoadingArray(NUMBERS.quantityOfSingleProductsInTheLoadingArray)
    const loadingArrayRecommendedFurniture = useLoadingArray(NUMBERS.numberOfRandomFurnitureOffers)

    return (<>
        <section className="single-product-slider-Info">
            {isLoading
                ? <>
                    <SingleProductSlider image={loadingArray}/>
                    <SingleProductInfoLoading />
                  </>
                : error ? <QueryError message={error.message} />
                : <>
                    <SingleProductSlider image={data.separateFurniture.image} alt={data.separateFurniture.name} />
                    <SingleProductInfo {...data.separateFurniture} />
                  </>
            }
        </section>
        <section className="single-product-cards">
            <h2>
                {lang.singleProductCardTitleTextOne}
                <span>{lang.singleProductCardTitleTextTwo}</span>
            </h2>
            <div className='single-product-container-cards'>
                <IconCard array={lang.singleProductCard} />
            </div>
        </section>
        <section className="single-product-text">
            <h2>{lang.singleProductTextContainerTitle}</h2>
            <div>
                {lang.singleProductTextContainerTexts.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        </section>
        <section className='single-product-container-cards-link'>
            {isLoading
                ? <RecommendedFurniture array={loadingArrayRecommendedFurniture} />
                : error ? <QueryError message={error.message} />
                : <RecommendedFurniture array={data.offerFurniture} />
            }
        </section>
    </>)
}

export default SingleProduct