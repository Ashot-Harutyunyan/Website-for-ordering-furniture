import './singleProductSlider.style.scss'
import { useState } from 'react'
import ComponentLoading from '../Loading/ComponentLoading/ComponentLoading.jsx'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function SingleProductSlider({ image, alt }) {

    const [selectedImage, setSelectedImage] = useState(0)

    return (<div>
        <div className='container-big-image'>
            <div style={{transform: `translateX(-${selectedImage}00%)`}}>
                {image.map((image, index) => {
                    return image
                        ? <LazyLoadImage key={index} src={image} alt={alt} effect="blur" />
                        : <ComponentLoading key={index} />
                })}
            </div>
        </div>
        <div className='container-small-image'>
            {image.map((image, index) => {
                return <div key={index}
                     className={selectedImage === index ? 'selected' : ''}
                     onClick={() => setSelectedImage(index)}>
                     { image
                         ? <LazyLoadImage src={image} alt={alt} effect="blur" />
                         : <ComponentLoading />
                     }
                </div>
            })}
        </div>
    </div>)
}

export default SingleProductSlider