import './filters.style.scss'
import { useFilters } from "../../ctx/FiltersContext.jsx"
import { useLanguage } from "../../ctx/LanguageContext.jsx"
import { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md"

function Filters() {

    const [category, handleCategory] = useFilters()
    const [ lang ] = useLanguage()
    const [open, setOpen] = useState(false)

    const activeCategory = lang.categories.find(c => c.id === category)

    function toggleCategories(id) {
        handleCategory(id)
        setOpen(false)
    }

    return (<div className="container-filters">
        <div className='container-filters-content'>
            <p className='catalog-container-category-filters-name'>{lang.filtersName}</p>
            <div className={`filters${open ? ' open' : ' close'}`}>
                <div className='filters-header' onClick={() => setOpen(!open)}>
                    <h2 className={activeCategory.id !== 'all' ? 'filtering' : '' }>
                        {activeCategory.label}
                    </h2>
                    <MdKeyboardArrowDown />
                </div>
                <div className='filters-body'>
                    {lang.categories.map((cat) => (
                        <div key={cat.id} onClick={() => toggleCategories(cat.id)}>
                            <p>{cat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>)
}

export default Filters