import { useEffect, useState } from 'react';
import './filterBar.css'

import { useAddFilter, useRemoveFilter, useResetFilters, useFilters, 
 } from '../../contexts/filterContext';

export const FilterBar = () => {

   const activeFilters = useFilters()
   const addFilter = useAddFilter()
   const removeFilter = useRemoveFilter()
   const resetFilters = useResetFilters()

  const handleFilterClick = (filter) => {
    console.log('handleFilter')
    if(activeFilters.includes(filter)) {
      removeFilter(filter)
    } else if(!(activeFilters.includes(filter))) {
      addFilter(filter)
    }
  }

  useEffect(() => {
    console.log(activeFilters)
  }, [activeFilters])


    return (
      <div className="filter-bar">
        <div>
          <p
            className={`filter-button`}
            onClick={(e) => resetFilters()}
          >
            Reset Filters
          </p>
        </div>
        <div>
          <p
            className={`filter-button`}
            onClick={(e) => handleFilterClick("Filter One")}
          >
            Filter One
          </p>
        </div>
        <div>
          <p
            className={`filter-button `}
            onClick={(e) => handleFilterClick("Filter Two")}
          >
            Filter Two
          </p>
        </div>
        <div>
          <p
            className={`filter-button`}
            onClick={(e) => handleFilterClick("Filter Three")}
          >
            Filter Three
          </p>
        </div>
      </div>
    );

}