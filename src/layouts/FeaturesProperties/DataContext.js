import React, { useContext } from 'react';
import { usePropertiesFetch } from '../../hooks/useFetch';


// Data
const content = {
    tag: "Features Properties",
    title: "Find where enjoy your next holidays.",
    button: 'Get More'
};

// Context
const DataContext = React.createContext()

// Custom Hook
export function useDataContext() {
    return useContext(DataContext)
}
// Provider
export const DataProvider = ({ children }) => {
    const { data, loading } = usePropertiesFetch()
    // console.log({ data, loading })
    return (
        <DataContext.Provider value={{ loading, data, content }}>{children}</DataContext.Provider>
    )

}