import './singleProductInfo.style.scss'
import { useLanguage } from "../../ctx/LanguageContext.jsx"
import { Link } from "react-router"
import { LuMapPin } from "react-icons/lu"
import { FiPhone } from "react-icons/fi"
import { RiFacebookBoxLine } from "react-icons/ri"
import { IoLogoInstagram } from "react-icons/io5"

const icons = {
    FiPhone,
    RiFacebookBoxLine,
    IoLogoInstagram,
    LuMapPin
}

function SingleProductInfo({ color, description, material, name, price }) {

    const [ lang ] = useLanguage()

    return <div className='single-product-container-info'>
            <h2 className='single-product-container-info-name'>{name}</h2>
            <p className='single-product-container-info-description'>{description}</p>
            <div className='single-product-container-info-color'>
                <span>{lang.productsColor}</span>
                <p>{color}</p>
            </div>
            <div className='single-product-container-info-material'>
                <span>{lang.productsMaterial}</span>
                <div>{material.map((item, index) => (<p key={index}>{item}</p>))}</div>
            </div>
            <div className='single-product-container-info-price'>
                <span>{lang.productsPrice}</span>
                <p>{price} &#1423;</p>
            </div>
            <div className='single-product-container-info-container-icons'>
                {lang.homePageContactContainerIcons.map((elem, index) => {
                    const Icon = icons[elem.src]
                    return <div key={index} className='single-product-container-info-icon'>
                        <div>{Icon && <Icon />}<span>{elem.oneSubtitle}</span></div>
                        <p>{elem.twoSubtitles}</p>
                    </div>
                })}
            </div>
    </div>
}

export default SingleProductInfo