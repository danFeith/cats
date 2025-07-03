import React, { useEffect, useState } from 'react';
import { useCatsListPageStyles } from './styles';
import CatCard from '../../components/CatCard/CatCard';
import { List } from 'immutable';
import axios from 'axios';

interface ICat {
    id: number;
    fullName: string;
    description: string;
    image: string;
}

export const CatsListPage: React.FC = () => {
    const classes = useCatsListPageStyles();
    const [cats, setCats] = useState(List<ICat>());
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await axios.get<ICat[]>('http://localhost:5000/cat');
                setCats(List(response.data));
            } catch (err) {
                setError('Failed to load cats. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchCats();
    }, []);

    if (loading) {
        return <p className={classes.loading}>Loading cats...</p>;
    }

    if (error) {
        return <p className={classes.error}>{error}</p>;
    }

    return (
        <div className={classes.container}>
            {cats.map((cat) => (
                <CatCard
                    key={cat.id}
                    image={cat.image}
                    fullName={cat.fullName}
                    description={cat.description}
                />
            ))}
        </div>
    );
};

