import { useEffect, useState } from "react";
import axios from "axios";

const defaultData = {
    hits: [
        {
            id: '01',
            coverPhoto: { url: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
            imageAlt: "Property Case 1",
            title: "Colette's Family Home",
            price: 1131,
            location: "Miami",
            accommodation: {
                hosts: 6,
                room: 2
            }
        },
        {
            id: '02', coverPhoto: { url: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
            imageAlt: "Property Case 2",
            title: "Property Case 2",
            price: 890,
            location: "Blowing Rock",
            accommodation: {
                hosts: 10,
                room: 1
            }
        },
        {
            id: '03', coverPhoto: { url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
            imageAlt: "Nancy's Cottage 2",
            title: "Nancy's Cottage 2",
            price: 2500,
            location: "Black Mountain",
            accommodation: {
                hosts: 8,
                room: 1
            }
        },
        {
            id: '04',
            coverPhoto: { url: "https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
            imageAlt: "Property Case 4",
            title: "Property Case 4",
            price: 5620,
            location: "Black Mountain",
            accommodation: {
                hosts: 8,
                room: 1
            }
        },
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

    // useEffect(() => {
    //     getData()
    // }, [])

    // Check if turns data or error and handle dummy data
    useEffect(() => {
        data && setLoading(!loading)
        setTimeout(() => {
            if (data) return
            setData(defaultData)
            setLoading(!loading)
        }, 1000)
    }, [data])

    return { data, error, loading }
}