import { useCatsListPageStyles } from './styles';
import { CatCard } from '../../components/CatCard';
import { useCatsContext } from '../../context/CatContext';
import { SearchBar } from '../../components/SearchBar';

const LOADING_MESSAGE = 'Loading cats...'

export const CatsListPage = () => {
    const classes = useCatsListPageStyles();
    const { cats, loading, error, deleteCat, setSearchQuery } = useCatsContext();

    return (
        <div className={classes.container}>
            <SearchBar onSearch={setSearchQuery} />
            {loading && <p className={classes.loading}>{LOADING_MESSAGE}</p>}
            {error && <p className={classes.error}>{error}</p>}
            {!loading && !error && cats.map((cat) => (
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
