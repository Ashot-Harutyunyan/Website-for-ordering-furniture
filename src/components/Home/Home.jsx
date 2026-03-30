import './home.style.scss'
import { useHomeQuery } from "./useHomeQuery.js"
import { useLanguage } from '../../ctx/LanguageContext.jsx'
import { NUMBERS } from '../../constants.js'
import { Link } from 'react-router'
import ProductCard from "../ProductCard/ProductCard.jsx"
import ProductLoading from "../Loading/ProductLoading/ProductLoading.jsx"
import { useLoadingArray } from "../hooks/useLoadingArray.js"
import IconCard from "../IconCard/IconCard.jsx"
import InfoCard from "../InfoCard/InfoCard.jsx"
import Header from "../Header/Header.jsx"
import QueryError from "../Errors/QueryError/QueryError.jsx"
import { HiMiniArrowLongRight } from "react-icons/hi2"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'


function Home() {

    const [ lang, currentCode ] = useLanguage()
    const { data, isLoading, error } = useHomeQuery(currentCode)
    const loadingArray = useLoadingArray(NUMBERS.quantityOfProductsInTheLoadingArray)

    return (<>
        <Header
            className={'home-header'}
            title={lang.homeHeaderTitle}
            subtitle={lang.homeHeaderSubTitle}
            titleSpan={lang.homeHeaderTitleSpan}
            reverse={false}
        />
        <section className="home-featured-collection scrollUp">
            <h2 className="home-featured-collection-title">{lang.homeTitle}</h2>
            <p className="home-featured-collection-sub-title">{lang.homeSubTitle}</p>
            {
                isLoading ? <ProductLoading array={loadingArray} />
                : error ? <QueryError message={error.message} />
                : <ProductCard products={data.slice(0, NUMBERS.quantityOfProductsInTheLoadingArray)} />
            }
            <Link to='/catalog' className='link-catalog'>{lang.homeLinkCatalog}</Link>
        </section>
        <section className="home-information-about-us">
            <Link to='/about' className='link-about'>
                <span>{lang.homeLinkAbout}</span>
                <HiMiniArrowLongRight />
            </Link>
            <div className='home-page-about-container-information'>
                <h2 className='home-page-about-title'>{lang.homePageAboutTitle}</h2>
                <div className='home-page-about-subtitle'>
                    <InfoCard array={lang.homePageAboutSubtitle} />
                </div>
                <div className='home-page-about-container'>
                    <IconCard
                        array={lang.homePageAboutContainerIcons}
                        backgroundIcon={'--background-home-icons'}
                    />
                </div>
            </div>
            <div className="craftsman">
                <div className="craftsman-image-wrapper">
                    <div className="craftsman-image">
                        <LazyLoadImage
                            src="/home-page-craftsman.png"
                            alt="Master craftsman working on handmade furniture"
                            effect="blur"
                        />
                    </div>
                    <div className="craftsman-border" />
                </div>
            </div>
        </section>
        <section className='home-page-contact'>
            <div>
                <h2>{lang.homePageContactTitle}</h2>
                <p>{lang.homePageContactSubtitle}</p>
            </div>
            <div className='home-page-about-container'>
                <IconCard
                    array={lang.homePageContactContainerIcons}
                    backgroundIcon={'--bg-home-contact-icons'}
                />
            </div>
        </section>
    </>)
}

export default Home