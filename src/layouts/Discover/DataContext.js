import React, { useContext } from 'react';
import { usePropertiesFetch } from '../../hooks/useFetch';


// Data
const content = {
    tag: "Discover",
    title: "Get inspiration for your next trip.",
};
const gallery = [
    {
        title: 'Punta Cana',
        image: 'https://ambianceenterprise.avantio.com/child/assets/img/zonas/puntacana.jpg',
        link: 'https://ambianceenterprise.avantio.com/rentals/rentals-dominican-republic-p83/grid-view/',
    },
    {
        title: 'Cuba',
        image: 'https://ambianceenterprise.avantio.com/child/assets/img/zonas/cuba.jpg',
        link: 'https://ambianceenterprise.avantio.com/rentals/rentals-dominican-republic-p83/grid-view/',
    },
    {
        title: 'Guadalupe',
        image: 'https://ambianceenterprise.avantio.com/child/assets/img/zonas/guadalupe.jpg',
        link: 'https://ambianceenterprise.avantio.com/rentals/rentals-dominican-republic-p83/grid-view/',
    },
    {
        title: 'Bahamas',
        image: 'https://ambianceenterprise.avantio.com/child/assets/img/zonas/bahamas.jpg',
        link: 'https://ambianceenterprise.avantio.com/rentals/rentals-dominican-republic-p83/grid-view/',
    },
    {
        title: 'Anguilla',
        image: 'https://ambianceenterprise.avantio.com/child/assets/img/zonas/anguilla.jpg',
        link: 'https://ambianceenterprise.avantio.com/rentals/rentals-dominican-republic-p83/grid-view/',
    },
    {
        title: 'Martinica',
        image: 'https://ambianceenterprise.avantio.com/child/assets/img/zonas/martinica.jpg',
        link: 'https://ambianceenterprise.avantio.com/rentals/rentals-dominican-republic-p83/grid-view/',
    },
    {
        title: 'Barbuda',
        image: 'https://ambianceenterprise.avantio.com/child/assets/img/zonas/barbuda.jpg',
        link: 'https://ambianceenterprise.avantio.com/rentals/rentals-dominican-republic-p83/grid-view/',
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
        <DataContext.Provider value={{ data: gallery, content }}>{children}</DataContext.Provider>
    )

}