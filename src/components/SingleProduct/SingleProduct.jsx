import './singleProduct.style.scss'
import { useMemo } from 'react'
import { Link, useParams } from "react-router"
import { useLanguage } from "../../ctx/LanguageContext.jsx"
import SingleProductSlider from "../SingleProductSlider/SingleProductSlider"
import SingleProductInfo from "../SingleProductInfo/SingleProductInfo"
import IconCard from "../IconCard/IconCard.jsx"

function SingleProduct() {

    const { id } = useParams()
    const [ lang ] = useLanguage()
    const { color, description, image, material, name, price } = lang.products[id - 1]
    const data = lang.products


    const randomProducts = useMemo(() => {
        const used = new Set([id - 1])

        return Array.from({ length: 3 }, () => {
            let i
            do { i = Math.floor(Math.random() * data.length) } while (used.has(i))
            used.add(i)
            return data[i]
        })
    }, [data, id])

    return (<>
        <section className="single-product-slider-Info">
            <SingleProductSlider image={image} alt={name} />
            <SingleProductInfo {...{ color, description, material, name, price }} />
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
            {randomProducts.map(({id, image, name, price}) => (
                <Link to={`/product/${id}`} key={id} className='single-product-card-link'>
                    <div className='single-product-card-link-container-img'>
                        <img src={image[0]} alt={name}/>
                    </div>
                    <div className='single-product-card-link-container-name-price'>
                        <p>{name}</p>
                        <p>{price} &#1423;</p>
                    </div>
                </Link>
            ))}
        </section>
    </>)
}

export default SingleProduct