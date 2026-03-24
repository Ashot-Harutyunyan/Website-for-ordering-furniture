import './singleProductSlider.style.scss'
import { useState } from 'react'

function SingleProductSlider({ image, alt }) {

    const [selectedImage, setSelectedImage] = useState(0)

    return (<div>
        <div className='container-big-image'>
            <div style={{transform: `translateX(-${selectedImage}00%)`}}>
                {image.map((image, index) => (
                    <img key={index} src={image} alt={alt}/>
                ))}
            </div>
        </div>
        <div className='container-small-image'>
            {image.map((image, index) => (
                <div key={index}
                     className={selectedImage === index ? 'selected' : ''}
                     onClick={() => setSelectedImage(index)}>
                    <img src={image} alt={alt}/>
                </div>
            ))}
        </div>
    </div>)
}

export default SingleProductSlider