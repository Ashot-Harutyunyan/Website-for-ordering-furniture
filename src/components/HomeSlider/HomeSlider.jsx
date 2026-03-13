import './homeSlider.style.scss'
import { IMAGE } from "../../constants.js"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
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
                    <LazyLoadImage src={src} alt={alt} effect="blur" />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>)
}

export default HomeSlider