import { createUseStyles } from 'react-jss';

export const useCatsListPageStyles = createUseStyles({
    container: {
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
    },
    title: {
        fontSize: '2rem',
        color: '#2c3e50',
        marginBottom: 16,
    },
    loading: {
        fontSize: '1.2rem',
        color: '#555',
    },
    error: {
        fontSize: '1.1rem',
        color: '#e74c3c',
    },
});
