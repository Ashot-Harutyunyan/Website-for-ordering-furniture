import './iconCard.style.scss'
import { FaLeaf, FaHammer } from "react-icons/fa6"
import { FaHeart } from "react-icons/fa"
import { LuPalette, LuUsers, LuShield } from "react-icons/lu"
import { FiLayers } from "react-icons/fi"

const icons = {
    FaLeaf,
    FaHammer,
    FaHeart,
    LuPalette,
    LuUsers,
    LuShield,
    FiLayers
}

function IconCard({ array, backgroundIcon }) {
    return (<>
            {array.map((elem, index) => {
                const Icon = icons[elem.src]

                return <div key={index} className='home-page-about-container-icons'>
                        <div style={{ backgroundColor: `var(${backgroundIcon})` }}>
                            {Icon
                                ? <Icon />
                                : <img src={elem.src} alt={elem.alt} />
                            }
                        </div>
                        <p>{elem.oneSubtitle}</p>
                        <span>{elem.twoSubtitles}</span>
                </div>
            })}
    </>)
}

export default IconCard