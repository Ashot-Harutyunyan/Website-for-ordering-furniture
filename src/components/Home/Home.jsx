import './home.style.scss'
import { useLanguage } from '../../ctx/LanguageContext.jsx'
import { Link } from 'react-router'
import HomeItem from "../HomeItem/HomeItem.jsx"
import HomeSlider from "../HomeSlider/HomeSlider.jsx"
import IconCard from "../IconCard/IconCard.jsx"
import InfoCard from "../InfoCard/InfoCard.jsx"
import HomeHeader from "../HomeHeader/HomeHeader.jsx"
import { HiMiniArrowLongRight } from "react-icons/hi2"


function Home() {

    const [ lang ] = useLanguage()

    return (<>
        <HomeHeader />
        <section className="home-featured-collection scrollUp">
            <h2 className="home-featured-collection-title">{lang.homeTitle}</h2>
            <p className="home-featured-collection-sub-title">{lang.homeSubTitle}</p>
            <HomeItem array={lang.homeRecommendedCollection} />
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
            <HomeSlider />
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