import React, { useContext } from 'react';
import { usePropertiesFetch } from '../../hooks/useFetch';


// Data
const content = {
    tag: "Offers",
    title: "Don’t miss this offers.",
};
const data = [
    {
        title: "Book your arrival at the accommodation with us",
        description: {
            date: "05/05/2021 - 05/05/2022",
            content: 'If you change your plans, you can cancel up to 24 hours before the pick-up time.The driver will be waiting for you when you arrive and will escort you to the car. He will also keep an '
        },
        image: {
            src: 'https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            alt: 'A Man Sitting Outside of the Famous Petra'
        }
    },
    {
        title: "Book your arrival at the accommodation with us",
        description: {
            date: "05/05/2021 - 05/05/2022",
            content: 'If you change your plans, you can cancel up to 24 hours before the pick-up time.The driver will be waiting for you when you arrive and will escort you to the car. He will also keep an '
        },
        image: {
            src: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            alt: 'People Sitting on Rooftop During Sunset'
        }
    },
    {
        title: "Book your arrival at the accommodation with us",
        description: {
            date: "05/05/2021 - 05/05/2022",
            content: 'If you change your plans, you can cancel up to 24 hours before the pick-up time.The driver will be waiting for you when you arrive and will escort you to the car. He will also keep an '
        },
        image: {
            src: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            alt: 'People Sitting on Rooftop During Sunset'
        }
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
        <DataContext.Provider value={{ data, content }}>{children}</DataContext.Provider>
    )

}