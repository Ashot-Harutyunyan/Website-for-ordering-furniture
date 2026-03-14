import './homeSlider.style.scss'
import { IMAGE } from "../../constants.js"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'

function HomeSlider() {
    return (<div className='home-slider'>
        <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
        >
            {IMAGE.map(({ src, alt }, index) => (
                <SwiperSlide key={index}>
                    <img src={src} alt={alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>)
}

export default HomeSlider