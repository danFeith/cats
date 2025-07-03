import { createUseStyles } from 'react-jss';

export const useCatCardStyles = createUseStyles({
    card: {
        display: 'flex',
        alignItems: 'flex-start',
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: 16,
    },
    details: {
        flex: 1,
    },
    name: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        margin: 0,
        color: '#2c3e50',
    },
    description: {
        fontSize: '0.95rem',
        color: '#555',
        marginTop: 4,
    },
});
