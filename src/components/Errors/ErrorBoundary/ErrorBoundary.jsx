import './errorBoundary.style.scss'
import { useTheme } from '../../../ctx/ThemeContext.jsx'
import { useLanguage } from "../../../ctx/LanguageContext.jsx"
import { useRouteError, isRouteErrorResponse, Link } from 'react-router'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function ErrorBoundary() {

    const [ theme ] = useTheme()
    const [ lang ] = useLanguage()
    const error = useRouteError()

    let title = lang.errorBoundaryTitle
    let message = lang.errorBoundaryMessage

    if (isRouteErrorResponse(error)) {
        title = `Error ${error.status}`
        message = error.statusText || "Routing error"
    } else if (error instanceof Error) {
        message = error.message
    }

    return <div className="container-error-boundary">
        <div className="error-boundary">
            <LazyLoadImage src={`/error-${theme}.svg`} alt="error boundary image" effect="blur" />
            <h1>{title}</h1>
            <p>{message}</p>
            <Link to="/">{lang.errorLinkText}</Link>
        </div>
    </div>
}

export default ErrorBoundary