import { useEffect, useState } from "react";
import axios from "axios";

const defaultData = {
    hits: [
        { id: '01', coverPhoto: { url: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }, imageAlt: "Property Case 1", title: "Property Case 1", price: "1000", type: "Sale" },
        { id: '02', coverPhoto: { url: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }, imageAlt: "Property Case 2", title: "Property Case 2", price: "2000", type: "Sale" },
        { id: '03', coverPhoto: { url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }, imageAlt: "Property Case 3", title: "Property Case 3", price: "3000", type: "Sale" },
        { id: '04', coverPhoto: { url: "https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }, imageAlt: "Property Case 4", title: "Property Case 4", price: "4000", type: "Sale" },
    ]
}

export const usePropertiesFetch = (hitsPerPage) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const options = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/properties/list',
        params: {
            locationExternalIDs: '5002,6020',
            purpose: 'for-rent',
            hitsPerPage: (hitsPerPage ? hitsPerPage : '6'),
            page: '0',
            lang: 'en',
            sort: 'city-level-score',
            rentFrequency: 'monthly',
            categoryExternalID: '4'
        },
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'b6db00fb43msh8453203173a444bp147999jsndb54190b69f3'
        }
    };

    async function getData() {
        return await axios.request(options)
            .then(({ data }) => setData(data))
            .catch((error) => setError(error))
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        data && setLoading(!loading)
        setTimeout(() => {
            if (data) return
            setData(defaultData)
            setLoading(!loading)
        }, 5000)
    }, [data])

    return { data, error, loading }
}