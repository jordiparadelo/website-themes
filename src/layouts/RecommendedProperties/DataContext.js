import React, { useContext } from 'react';
import { usePropertiesFetch } from '../../hooks/useFetch';


// Data
const content = {
    tag: "Recommendations",
    title: "These are the recommended places we find for you.",
};

// Context
const DataContext = React.createContext()

// Custom Hook
export function useDataContext() {
    return useContext(DataContext)
}
// Provider
export const DataProvider = ({ children }) => {
    const { data, loading } = usePropertiesFetch(3)
    return (
        <DataContext.Provider value={{ loading, data, content }}>{children}</DataContext.Provider>
    )

}