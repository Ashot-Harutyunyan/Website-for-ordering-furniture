import './header.style.scss'
import Nav from "../Nav/Nav.jsx"
import { useLanguage } from "../../ctx/LanguageContext.jsx"

function Header() {

    const [ lang ] = useLanguage()

    return (<header>
        <Nav />
        <div className="header-title">
            <h1>{lang.headerTitle}<br/><span>{lang.headerTitleSpan}</span></h1>
            <h3>{lang.headerSubTitle}</h3>
        </div>
    </header>)
}

export default Header