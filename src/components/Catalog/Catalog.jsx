import './catalog.style.scss'
import { useState, useMemo } from 'react'
import useCatalogQuery from "../Contact/useCatalogQuery.js"
import { NUMBERS } from '../../constants.js'
import Header from "../Header/Header.jsx"
import { Link } from 'react-router'
import { useLanguage } from "../../ctx/LanguageContext.jsx"
import { useFilters } from "../../ctx/FiltersContext.jsx"
import Filters from "../Filters/Filters.jsx"
import ProductCard from "../ProductCard/ProductCard.jsx"
import ProductLoading from "../Loading/ProductLoading/ProductLoading.jsx"
import {useLoadingArray} from "../hooks/useLoadingArray.js"
import { HiMiniArrowLongRight } from "react-icons/hi2"
import QueryError from "../Errors/QueryError/QueryError.jsx"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Catalog() {

    const [ lang, currentCode ] = useLanguage()
    const [ category ] = useFilters()

    const [lastProductsIndex, setLastProductsIndex] = useState(NUMBERS.productsPerPage)

    const { data, isLoading, error } = useCatalogQuery(currentCode)
    const loadingArray = useLoadingArray(NUMBERS.quantityOfProductsInTheLoadingArray)

    const filteredProducts = useMemo(() => {
        if (!data) return []
        const filtered = category === 'all'
            ? data
            : data.filter(p => p.category === category)
        return filtered.slice(0, lastProductsIndex)
    }, [data, category, lastProductsIndex])

    function handleLoadMoreProducts() {
        if (!data || lastProductsIndex >= data.length) return
        setLastProductsIndex(prev => prev + NUMBERS.productsPerPage)
    }

    return (<>
        <Header
            className={'header-catalog'}
            title={lang.catalogHeaderTitle}
            subtitle={lang.catalogHeaderSubTitle}
            reverse={false}
        />
        <section>
            <h2 className='catalog-categories-title'>{lang.catalogCategoriesTitle}</h2>
            <p className='catalog-categories-subTitle'>{lang.catalogCategoriesSubTitle}</p>
            <Filters />
            {
                isLoading ? <ProductLoading array={loadingArray} />
                : error ? <QueryError message={error.message} />
                : <ProductCard products={filteredProducts} />
            }
            {data && lastProductsIndex < data.length &&
                <button className='button-load-more-products' onClick={()=> handleLoadMoreProducts()}>
                    {lang.buttonLoadMore}
                </button>
            }
        </section>
        <section className='container-catalog-indicative-goods'>
            <div className='catalog-indicative-goods-preface'>
                <h4>{lang.catalogIndicativeGoodsPreface.preface}</h4>
                <h2>{lang.catalogIndicativeGoodsPreface.title}</h2>
                <p>{lang.catalogIndicativeGoodsPreface.subTitle}</p>
            </div>
            {lang.catalogIndicativeGoods.map(({ id, name, description, src}) => (
                <div key={id} className="catalog-indicative-goods">
                    <div className='catalog-indicative-goods-container-img'>
                        <LazyLoadImage src={src} alt={name} effect="blur" />
                    </div>
                    <div className='catalog-indicative-goods-container-info'>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <Link to={`/product/${id}`}>
                            {lang.productCardLinkName}
                            <HiMiniArrowLongRight />
                        </Link>
                    </div>
                </div>
            ))}
        </section>
        <section className='catalog-footer-content'>
            <div className='circular-pattern-top'></div>
            <div className='circular-pattern-bottom'></div>
            <h4>{lang.catalogFooterContent.preface}</h4>
            <h2>{lang.catalogFooterContent.title}</h2>
            <p>{lang.catalogFooterContent.subTitle}</p>
            <Link to='/contact'>
                {lang.catalogFooterContent.linkText}
                <HiMiniArrowLongRight />
            </Link>
        </section>
    </>)
}

export default Catalog