import './recommendedFurniture.style.scss'
import { Link } from "react-router"
import ComponentLoading from '../Loading/ComponentLoading/ComponentLoading.jsx'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function RecommendedFurniture({ array }) {
    return (<>
        {array.map((elem, index) => (
            elem !== null
            ? <Link to={`/product/${elem.id}`} key={elem.id} className='single-product-card-link'>
                <div className='single-product-card-link-container-img'>
                    <LazyLoadImage src={elem.image[0]} alt={elem.name} effect="blur" />
                </div>
                <div className='single-product-card-link-container-name-price'>
                    <p>{elem.name}</p>
                    <p>{elem.price} &#1423;</p>
                </div>
              </Link>
            : <div key={index} className='recommended-furniture-loading'>
                    <ComponentLoading />
                <div className='container-recommended-furniture-loading-element'>
                    <ComponentLoading />
                    <ComponentLoading />
                </div>
            </div>
        ))}
    </>)
}

export default RecommendedFurniture