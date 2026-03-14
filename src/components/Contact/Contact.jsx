import './contact.style.scss'
import { useRef } from 'react'
import ContactHeader from "../ContactHeader/ContactHeader.jsx"
import IconCard from "../IconCard/IconCard.jsx"
import { useLanguage } from "../../ctx/LanguageContext.jsx"

function Contact() {

    const [ lang ] = useLanguage()
    const contactRef = useRef(null)

    function scrollToContact() {
        contactRef.current.scrollIntoView({
            behavior: "smooth",
        })
    }

    return (<>
        <ContactHeader />
        <section ref={contactRef} className='contact-item-container'>
            <IconCard
                array={lang.homePageContactContainerIcons}
                backgroundIcon={'--bg-home-contact-icons'}
            />
        </section>
        <section className='contact-iframe-container'>
            <div className='contact-iframe-container-title'>
                <h2>{lang.contactPageIframeTitle}</h2>
                <hr/>
            </div>
            <div className='container-iframe'>
                <iframe
                    src="https://yandex.com/map-widget/v1/?ll=44.294885%2C40.159511&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MDQ1MjIxMzY4EmvVgNWh1bXVodW91b_VodW2LCDUsdaA1bTVodW-1avWgNWrINW01aHWgNWmLCDUt9W71bTVq9Wh1a7Vq9W2INaE1aHVstWh1oQsINSx1oDVodaA1aHVv9W11aHVtiDWg9W41bLVuNaBLCAyNyIKDfctMUIVV6MgQg%2C%2C&z=17"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="map"
                ></iframe>
            </div>
        </section>
        <section className='contact-info-container'>
            <h2>{lang.contactInfoTitle}</h2>
            <hr/>
            <p>{lang.contactInfoText}</p>
            <button onClick={scrollToContact}>{lang.contactPageButtonText}</button>
        </section>
    </>)
}

export default Contact