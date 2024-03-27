import { useEffect, useState } from 'react';
import './filterBar.css'

import { useAddFilter, useRemoveFilter, useResetFilters, useFilters, 
 } from '../../contexts/filterContext';

export const FilterBar = () => {

  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

   const activeFilters = useFilters()
   const addFilter = useAddFilter()
   const removeFilter = useRemoveFilter()
   const resetFilters = useResetFilters()

  const handleFilterClick = (filter) => {
    if(activeFilters.includes(filter)) {
      removeFilter(filter)
    } else if(!(activeFilters.includes(filter))) {
      addFilter(filter)
    }
    if(filter[filter.length-1] === '1' ) setActive1(!active1)
    if (filter[filter.length-1] === "2") setActive2(!active2);
    if (filter[filter.length-1] === "3") setActive3(!active3);
  }

  const handleResetClick = () => {
    resetFilters()
    setActive1(false)
    setActive2(false)
    setActive3(false)

  }

  useEffect(() => {
  }, [activeFilters])



    return (
      <div className="filter-bar">
        <div>
          <p className={`filter-button`} onClick={handleResetClick}>
            Reset Filters
          </p>
        </div>
        <div>
          <p
            className={`filter-button ${active1 && "active"}`}
            onClick={(e) => handleFilterClick(e.target.innerText)}
          >
            Filter 1
          </p>
        </div>
        <div>
          <p
            className={`filter-button ${active2 && "active"}`}
            onClick={(e) => handleFilterClick(e.target.innerText)}
          >
            Filter 2
          </p>
        </div>
        <div>
          <p
            className={`filter-button ${active3 && "active"}`}
            onClick={(e) => handleFilterClick(e.target.innerText)}
          >
            Filter 3
          </p>
        </div>
      </div>
    );

}