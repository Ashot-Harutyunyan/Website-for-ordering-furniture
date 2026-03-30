import './productLoading.style.scss'

function ProductLoading({ array }) {
    return (<div className="product-card-loading">
        {array.map((elem, index) => {
            return <div  key={index}  className='card-loading-container'>
                <div className='card-loading-image'></div>
                <div className='card-loading-container-info'>
                    <div className='card-loading-name'></div>
                    <div className='card-loading-description'></div>
                    <div className='card-loading-container-price-button'>
                        <div className='card-loading-price'></div>
                        <div className='card-loading-button'></div>
                    </div>
                </div>
            </div>
        })}
    </div>)
}

export default ProductLoading