import './app.style.scss'
import React from 'react'
import Main from "./components/main/main.jsx"
import Nav from "./components/Nav/Nav.jsx"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx"

function App() {
    return (<>
        <Nav />
        <Main />
        <ScrollToTop />
    </>)
}

export default App