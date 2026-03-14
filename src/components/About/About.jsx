import './about.style.scss'
import { useLanguage } from "../../ctx/LanguageContext.jsx"
import AboutHeader from "../AboutHeader/AboutHeader.jsx"
import InfoCard from "../InfoCard/InfoCard.jsx"
import IconCard from "../IconCard/IconCard.jsx"
import { IoCheckboxOutline } from "react-icons/io5"

function About() {

    const [ lang ] = useLanguage()

    return (<>
        <AboutHeader />
        <section className='about-page-container-information-img'>
            <div>
                <h2 className='container-information-img-title'>{lang.aboutSectionInfoTitle}</h2>
                <div className='home-page-about-subtitle'>
                    <InfoCard array={lang.aboutSectionInfoText} />
                </div>
            </div>
            <img className='img-craftsman' src="/craftsman.png" alt="craftsman" />
        </section>
        <section className='about-container-info-items'>
            <p className='about-container-info-items-small-title'>{lang.aboutSectionInfoItemsSmallTitle}</p>
            <h2 className='about-container-info-items-title'>{lang.aboutSectionInfoItemsTitle}</h2>
            <div className='about-info-item'>
                <IconCard array={lang.aboutSectionInfoItems} />
            </div>
        </section>
        <section className='about-info-list'>
            <ul>
                {lang.aboutSectionInfoList.map((item, i) => (
                     <li key={i}><IoCheckboxOutline /><span>{item}</span></li>
                ))}
            </ul>
            <div className='about-container-info-title-text'>
                <p className='about-container-info-items-small-title'>{lang.aboutSectionInfoListSubTitle}</p>
                <h2 className='about-info-list-title'>{lang.aboutSectionInfoListTitle}</h2>
                <hr/>
                <p className='about-info-list-text'>{lang.aboutSectionInfoListText}</p>
            </div>
        </section>
    </>)
}

export default About