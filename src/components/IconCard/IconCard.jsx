import './iconCard.style.scss'
import { FaLeaf, FaHammer } from "react-icons/fa6"
import { FaHeart } from "react-icons/fa"
import { LuPalette, LuUsers, LuShield, LuMapPin } from "react-icons/lu"
import { FiLayers, FiPhone } from "react-icons/fi"
import { RiFacebookBoxLine } from "react-icons/ri"
import { IoLogoInstagram } from "react-icons/io5"

const icons = {
    FaLeaf,
    FaHammer,
    FaHeart,
    LuPalette,
    LuUsers,
    LuShield,
    FiLayers,
    FiPhone,
    RiFacebookBoxLine,
    IoLogoInstagram,
    LuMapPin
}

function IconCard({ array, backgroundIcon }) {
    return (<>
            {array.map((elem, index) => {
                const Icon = icons[elem.src]
                return <div key={index} className='home-page-about-container-icons'>
                        <div style={{ backgroundColor: `var(${backgroundIcon})` }}>
                            {Icon && <Icon />}
                        </div>
                        <p>{elem.oneSubtitle}</p>
                        <span>{elem.twoSubtitles}</span>
                </div>
            })}
    </>)
}

export default IconCard