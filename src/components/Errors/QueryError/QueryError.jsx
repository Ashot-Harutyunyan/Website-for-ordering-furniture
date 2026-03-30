import './queryError.style.scss'
import { useLanguage } from "../../../ctx/LanguageContext.jsx"
import { useTheme } from '../../../ctx/ThemeContext.jsx'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function QueryError({ message }) {

    const [ lang ] = useLanguage()
    const [ theme ] = useTheme()

    return (<div className='container-query-error'>
        <h2>{lang.queryErrorTitle}</h2>
        <LazyLoadImage src={`/query-error-${theme}.svg`} alt="query error image" effect="blur"/>
        <p>{message}</p>
    </div>)
}

export default QueryError