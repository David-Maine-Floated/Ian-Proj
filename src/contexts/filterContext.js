import React, {useContext, useState} from 'react'

const FilterContext = React.createContext()
const AddFilterContext = React.createContext()
const RemoveFilterContext = React.createContext()
const ResetFiltersContext = React.createContext()

export const useFilters = () => {
    return useContext(FilterContext)        
}
export const useAddFilter = () => {
    return useContext(AddFilterContext)        
}
export const useRemoveFilter = () => {
    return useContext(RemoveFilterContext)        
}
export const useResetFilters= () => {
    return useContext(ResetFiltersContext)        
}


export function FilterProvider({children}) {
    const[filters, setFilters] = useState([])


    const addFilter = (filter) => {
        setFilters([...filters, filter])
    }

    const removeFilter = (filter) => {
        console.log('removeFilterFUnc', filters)
        let newFilters = filters.filter(filt => filt !== filter)
        setFilters(newFilters)
    }

    const resetFilters = () => {

        setFilters([])
    }

    return (
        <FilterContext.Provider value={filters}>
            <AddFilterContext.Provider value={addFilter}>
                <RemoveFilterContext.Provider value={removeFilter}>
                    <ResetFiltersContext.Provider value={resetFilters}>
                        {children}
                    </ResetFiltersContext.Provider>
                </RemoveFilterContext.Provider>
            </AddFilterContext.Provider>
        </FilterContext.Provider>

    )

}