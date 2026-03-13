import './homeHeader.style.scss'
import { useLanguage } from "../../ctx/LanguageContext.jsx"

function HomeHeader() {

   const [ lang ] = useLanguage()

    return (<header className='home-header'>
        <div className="home-header-title">
            <h1>{lang.homeHeaderTitle}<br/><span>{lang.homeHeaderTitleSpan}</span></h1>
            <h3>{lang.homeHeaderSubTitle}</h3>
        </div>
    </header>)
}

export default HomeHeader