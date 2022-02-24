import React, { useContext } from 'react';
import { useFetch } from '../../hooks/useFetch';


// Data
// const data = {
//     tag: "Welcome",
//     title: "A new way of traveling",
//     text: "Live the unique experience of the Caribbean, in its idyllic authenticity! The selection and control of each villa are made by ourselves in order to ensure you the holidays you deserve. ",
//     image: 'https://images.pexels.com/photos/1249586/pexels-photo-1249586.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
// };

// Context
const DataContext = React.createContext()

// Custom Hook
export function useDataContext() {
    return useContext(DataContext)
}
// Provider
export const DataProvider = ({ children }) => {
    const { data, loading } = useFetch()
    // console.log({ data, loading })
    return (
        <DataContext.Provider value={data}>{loading ? '⏲ loading ... ' : children}</DataContext.Provider>
    )

}