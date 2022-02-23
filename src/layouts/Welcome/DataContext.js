import React, { useContext } from 'react';


// Data
const data = {
    tag: "Welcome",
    title: "A new way of traveling",
    text: "Live the unique experience of the Caribbean, in its idyllic authenticity! The selection and control of each villa are made by ourselves in order to ensure you the holidays you deserve. ",
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
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
    )

}