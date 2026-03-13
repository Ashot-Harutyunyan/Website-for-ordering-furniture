import './homeItem.style.scss'
import { Link } from 'react-router'

function HomeItem({ array }) {
    return <div className="home-container-featured-collection">
            {array.map(({ id, image, name, price, type }, index) => (
                <Link to={`/product/${id}`} key={index} className="home-container-item">
                    <div className="home-container-image">
                        <img src={image} alt={name}/>
                    </div>
                    <p className='home-container-featured-collection-name'>{name}</p>
                    <span className='home-container-featured-collection-type'>{type}</span>
                    <p className='home-container-featured-collection-price'>{price}</p>
                </Link>
            ))}
    </div>
}

export default HomeItem