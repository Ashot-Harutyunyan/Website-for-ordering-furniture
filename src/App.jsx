import './app.style.scss'
import React from 'react'
import Main from "./components/main/main.jsx"
import Nav from "./components/Nav/Nav.jsx"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
    return (<>
        <Nav />
        <Main />
        <Footer />
        <ScrollToTop />
    </>)
}

export default App