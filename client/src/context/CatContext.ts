import React, { useCallback, useEffect, useMemo, useState } from "react";
import constate from "constate";
import { List } from "immutable";
import axios from "axios";

const SERVER_URL = "http://localhost:5000"
const RANDOM_CAT_API_URL = 'https://api.thecatapi.com'

export interface ICat {
    id: number;
    firstName: string;
    lastName: string;
    description: string;
    image: string;
}

export interface IMouse {
    name: string;
}


const useCatsState = () => {
    const [cats, setCats] = useState(List<ICat>())
    const [loading, setLoading] = useState<boolean>(false);
    const [miceLoading, setMiceLoading] = useState<boolean>(false);
    const [randomImageLoading, setRandomImageLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const fetchCats = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get<ICat[]>(`${SERVER_URL}/cat`);
            setCats(List(response.data));
        } catch (err) {
            setError('Failed to load cats. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, []);

    const createCat = useCallback(async (catDetails: Omit<ICat, 'id'>) => {
        const { firstName, lastName, description, image } = catDetails
        setLoading(true);
        await axios.post(`${SERVER_URL}/cat`, {
            firstName,
            lastName,
            description,
            image,
        });
        await fetchCats()
        setLoading(false)
    }, [fetchCats])

    const deleteCat = useCallback(async (catId: number) => {
        setLoading(true);
        await axios.delete(`${SERVER_URL}/cat/${catId}`);
        await fetchCats()
        setLoading(false)
    }, [fetchCats])

    const getCatsMice = useCallback(async (catId: number) => {
        setMiceLoading(true)
        const mice = (await axios.get<IMouse[]>(`${SERVER_URL}/mouse/bycat/${catId}`))?.data || [];
        setMiceLoading(false)
        return mice;
    }, [])

    const addMouseToCat = useCallback(async (catId: number, name: string) => {
        setMiceLoading(true)
        await axios.post(`${SERVER_URL}/mouse`, {
            name,
            catId,
        });
        setMiceLoading(false)
    }, [])

    const fetchRandomCatImage = useCallback(async () => {
        setRandomImageLoading(true);
        try {
            const res = await axios.get(`${RANDOM_CAT_API_URL}/v1/images/search?limit=1`);
            if (res.data.length > 0 && res.data[0]?.url) {
                return res.data[0].url;
            } else {
                throw new Error('Failed to fetch random image. Please try again.');
            }
        } catch (error) {
            console.error('Error fetching random cat image:', error);
            throw new Error('Failed to fetch random image. Please try again.');
        } finally {
            setRandomImageLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCats();
    }, []);

    const catCapabilities = useMemo(() => ({
        cats,
        loading,
        miceLoading,
        error,
        fetchCats,
        createCat,
        deleteCat,
        fetchRandomCatImage,
        randomImageLoading,
        getCatsMice,
        addMouseToCat
    }), [
        cats,
        loading,
        miceLoading,
        error,
        randomImageLoading
    ])

    return catCapabilities
}

export const [CatsProvider, useCatsContext] = constate(useCatsState);

