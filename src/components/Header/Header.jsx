import './header.style.scss'

function Header({ className, title, subtitle, titleSpan, reverse }) {
    return (<header className={className}>
        <div className="header-content">
            {reverse && <p>{subtitle}</p>}
            <h1>
                {title}
                {titleSpan && <><br /><span>{titleSpan}</span></>}
            </h1>
            {!reverse && subtitle && <p>{subtitle}</p>}
        </div>
    </header>)
}

export default Header