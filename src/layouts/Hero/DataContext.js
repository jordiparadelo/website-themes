import React, { useContext } from 'react';
import { usePropertiesFetch } from '../../hooks/useFetch';


// Data
const content = {
    title: {
        0: "Have uniques holidays.",
        1: "Live the experience of the Caribbean"
    },
    image: {
        src: "https://images.pexels.com/photos/5597379/pexels-photo-5597379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "People on a Beach Resort At Daytime"
    }
};

// Context
const DataContext = React.createContext()

// Custom Hook
export function useDataContext() {
    return useContext(DataContext)
}
// Provider
export const DataProvider = ({ children }) => {

    return (
        <DataContext.Provider value={{ content }}>{children}</DataContext.Provider>
    )

}