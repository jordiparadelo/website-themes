import { useEffect, useState } from "react";
import axios from "axios";

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
    }, [data])

    return { data, error, loading }
}