import './home.style.scss'
import React from 'react'
import { useLanguage } from '../../ctx/LanguageContext.jsx'

function Home() {

    const [ lang ] = useLanguage()

    return (<>
        <section className="home-featured-collection">
            <h2 className="home-featured-collection-title">{lang.homeTitle}</h2>
            <p className="home-featured-collection-sub-title">{lang.homeSubTitle}</p>
            <div className="home-container-featured-collection">
                {lang.homeRecommendedCollection.map(({ image, name, price, type }, index) => (
                    <div key={index} className="home-container-item">
                        <div className="home-container-image">
                            <img src={image} alt={name}/>
                        </div>
                        <p className='home-container-featured-collection-name'>{name}</p>
                        <span className='home-container-featured-collection-type'>{type}</span>
                        <p className='home-container-featured-collection-price'>{price}</p>
                    </div>
                ))}
            </div>
        </section>
    </>)
}

export default Home