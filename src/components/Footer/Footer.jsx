import './footer.style.scss'
import { useLanguage } from "../../ctx/LanguageContext.jsx"
import { Link } from 'react-router'
import {LuMapPin } from "react-icons/lu"
import { FiPhone } from "react-icons/fi"
import { RiFacebookBoxLine } from "react-icons/ri"
import { IoLogoInstagram } from "react-icons/io5"

const icons = {
    FiPhone,
    RiFacebookBoxLine,
    IoLogoInstagram,
    LuMapPin
}

function Footer() {

    const [ lang ] = useLanguage()

    return (<footer>
        <div className='footer-preface'>
            <h3>{lang.footerTitle}</h3>
            <p>{lang.footerText}</p>
        </div>
        <div className='footer-container-link'>
            <h3>{lang.footerLinkTitle}</h3>
            <div>
                {lang.NAV_LINKS.map(({ to, label }) => (
                    <Link to={to} key={to}>{label}</Link>
                ))}
            </div>
        </div>
        <div className='footer-icons-title-container'>
            <h3>{lang.footerContactTitle}</h3>
            <div className='footer-icons-container'>
                {lang.homePageContactContainerIcons.map((elem, index) => {
                    const Icon = icons[elem.src]
                    return <div key={index} className='footer-icons'>
                        {elem.src === 'FiPhone' || elem.src === 'LuMapPin'
                            ? <div className={`footer-icon-${elem.src}`}>
                                {Icon && <Icon />}
                                <p>{elem.twoSubtitles}</p>
                              </div>
                            : <Link to={elem.twoSubtitles} target='_blank'>
                                {Icon && <Icon className={`footer-icon-${elem.src}`} />}
                              </Link>
                        }
                    </div>
                })}
            </div>
        </div>
    </footer>)
}

export default Footer