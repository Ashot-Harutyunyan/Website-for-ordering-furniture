import './catalog.style.scss'
import { useState } from 'react'
import Header from "../Header/Header.jsx"
import { Link } from 'react-router'
import { useLanguage } from "../../ctx/LanguageContext.jsx"
import { useFilters } from "../../ctx/FiltersContext.jsx"
import Filters from "../Filters/Filters.jsx"
import ProductCard from "../ProductCard/ProductCard.jsx"
import { HiMiniArrowLongRight } from "react-icons/hi2"

function Catalog() {

    const [ lang ] = useLanguage()
    const [ category ] = useFilters()

    const [lastProductsIndex, setLastProductsIndex] = useState(9)
    const currentProducts = lang.products.slice(0, lastProductsIndex)

    function handleFiltersProducts(category) {
        const products = currentProducts
        if(category === 'all') return products
        return products.filter((elem) => elem.category === category)
    }

    function handleLoadMoreProducts(length) {
        if(lastProductsIndex >= length) return
        setLastProductsIndex((prev) => prev * 2)
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
            <ProductCard products={handleFiltersProducts(category)} />
            {lastProductsIndex <= lang.products.length &&
                <button className='button-load-more-products'
                    onClick={()=> handleLoadMoreProducts(lang.products.length)}>
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
                        <img src={src} alt={name}/>
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