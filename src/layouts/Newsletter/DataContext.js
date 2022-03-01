import React, { useContext } from 'react';
import { usePropertiesFetch } from '../../hooks/useFetch';


// Data
const content = {
    tag: "Newsletter",
    title: "Get more info about our accomodations.",
    image: {
        src: "https://images.pexels.com/photos/2828283/pexels-photo-2828283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Tray of Food Beside Body of Water"
    }
};
const form = {
    inputs: [
        {
            label: "Your email",
            type: 'text',
        }
    ],
    formConditions: {
        privacy: {
            available: true,
            render: () => (<label className="input-group"> <input type='checkbox' required /> I have read and accepted the privacy policy and general conditions</label>)
        },
        comercialInfo: {
            available: true,
            render: () => (<label className="input-group"> <input type='checkbox' /> Acceptance to receive commercial information</label>)
        },
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
        <DataContext.Provider value={{ content, form }}>{children}</DataContext.Provider>
    )

}