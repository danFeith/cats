import { useCatsListPageStyles } from './styles';
import { CatCard } from '../../components/CatCard';
import { useCatsContext } from '../../context/CatContext';

const LOADING_MESSAGE = 'Loading cats...'

export const CatsListPage = () => {
    const classes = useCatsListPageStyles();
    const { cats, loading, error, deleteCat } = useCatsContext()

    if (loading) {
        return <p className={classes.loading}>{LOADING_MESSAGE}</p>;
    }

    if (error) {
        return <p className={classes.error}>{error}</p>;
    }

    return (
        <div className={classes.container}>
            {cats.map((cat) => (
                <CatCard
                    key={cat.id}
                    id={cat.id}
                    image={cat.image}
                    fullName={`${cat.firstName} ${cat.lastName}`}
                    description={cat.description}
                    onDeleteCat={deleteCat}
                />
            ))}
        </div>
    );
};

