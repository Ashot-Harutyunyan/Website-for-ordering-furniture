import './contactHeader.style.scss'
import { useLanguage } from "../../ctx/LanguageContext.jsx"

function ContactHeader() {

    const [ lang ] = useLanguage()

    return (<header className="contact-header">
        <div className='contact-header-title'>
            <h1>{lang.contactHeaderTitle}</h1>
            <hr/>
            <p>{lang.contactHeaderSubTitle}</p>
        </div>
    </header>)
}

export default ContactHeader