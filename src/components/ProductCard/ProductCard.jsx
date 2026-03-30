import './productCard.style.scss'
import { Link } from 'react-router'
import { useLanguage } from "../../ctx/LanguageContext.jsx"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function ProductCard({ products }) {

    const [ lang ] = useLanguage()

    return <div className="container-collection">
            {products.map(({ id, image, name, price, description }, index) => {
                return <div key={index} className="container-item">
                    <div className="container-image">
                        <LazyLoadImage src={image[0]} alt={name} effect="blur" />
                    </div>
                    <div className='container-collection-item-info'>
                        <p className='container-product-card-name'>{name}</p>
                        <span className='container-product-card-description'>{description}</span>
                        <div className='container-product-card-price-link'>
                            <p className='container-product-card-price'>{price} &#1423;</p>
                            <Link to={`/product/${id}`} className='link-view-details'>{lang.productCardLinkName}</Link>
                        </div>
                    </div>
                </div>
            })}
    </div>
}

export default ProductCard