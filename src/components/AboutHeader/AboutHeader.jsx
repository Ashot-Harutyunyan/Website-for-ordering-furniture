import './aboutHeader.style.scss'
import { useLanguage } from "../../ctx/LanguageContext.jsx"

function AboutHeader() {

    const [ lang ] = useLanguage()

    return (<header className='about-header'>
        <div className="about-header-title">
            <p>{lang.aboutHeaderSubTitle}</p>
            <h1>{lang.aboutHeaderTitle}</h1>
            <hr/>
        </div>
    </header>)
}

export default AboutHeader