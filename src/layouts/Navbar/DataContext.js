import React, { useContext } from 'react';
// Resources
import { Logo, IconLinkedin, IconFacebook, IconTwitter } from '../../assets'


// Data
const content = {
    logo: <Logo />,
    links: {
        navigation: [
            { slug: 'Home', link: "/" },
            { slug: 'Rental', link: "/" },
            { slug: 'Long term rental', link: "/" },
            { slug: 'Sale', link: "/" },
            { slug: 'Special Offers', link: "/" },
            { slug: 'About us', link: "/" },
            { slug: 'Contact us', link: "/" },
            { slug: 'Blog', link: "/" },
        ],
        social: [{ slug: 'Facebook', link: "/", icon: <IconFacebook /> }, { slug: 'Linkedin', link: "/", icon: <IconLinkedin /> }, { slug: 'Instagram', link: "/", icon: <IconTwitter /> },],

    },

    title: "Filter by our category to fits your travel desires.",
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