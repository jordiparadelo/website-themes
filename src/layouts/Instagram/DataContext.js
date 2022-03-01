import React, { useContext } from 'react';
import { usePropertiesFetch } from '../../hooks/useFetch';


// Data
const content = {
    tag: "Instagram",
    title: "Inspire your trip.",
};
const categories = [
    {
        title: "Caribean Beach",
        link: "https://ambianceenterprise.avantio.com/rentals/holidays-rentals-rentals-p0/caribean-beach/grid-view/",
        image: "https://images.unsplash.com/photo-1604878434055-2ea819d5cbd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
    {
        title: "Infitinte Pool",
        link: "https://ambianceenterprise.avantio.com/rentals/holidays-rentals-rentals-p0/infinite-pool/grid-view/",
        image: "https://images.unsplash.com/photo-1616126113845-5916d8f827a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title: "Luxury",
        link: "https://ambianceenterprise.avantio.com/rentals/holidays-rentals-rentals-p0/luxury/grid-view/",
        image: "https://images.unsplash.com/photo-1518860308377-800f02d5498a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
    },
    {
        title: "Open Air",
        link: "https://ambianceenterprise.avantio.com/rentals/holidays-rentals-rentals-p0/open-air/grid-view/",
        image: "https://images.unsplash.com/photo-1587716839025-07c325222549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
    {
        title: "Outdoor",
        link: "https://ambianceenterprise.avantio.com/rentals/holidays-rentals-rentals-p0/outdoor/grid-view/",
        image: "https://images.unsplash.com/photo-1504564321107-4aa3efddb5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80"
    },
    {
        title: "Wondeful Views",
        link: "https://ambianceenterprise.avantio.com/rentals/holidays-rentals-rentals-p0/wondeful-views/grid-view/",
        image: "https://images.unsplash.com/photo-1605378258068-ed078aa26b6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
    },
]

// Context
const DataContext = React.createContext()

// Custom Hook
export function useDataContext() {
    return useContext(DataContext)
}
// Provider
export const DataProvider = ({ children }) => {

    return (
        <DataContext.Provider value={{ data: categories, content }}>{children}</DataContext.Provider>
    )

}