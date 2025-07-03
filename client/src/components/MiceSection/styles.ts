import { createUseStyles } from 'react-jss';

export const useMiceSectionStyles = createUseStyles({
    miceButton: {
        padding: '6px 10px',
        borderRadius: 4,
        border: '1px solid #3498db',
        backgroundColor: '#3498db',
        color: '#fff',
        fontSize: '0.9rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#2980b9',
        },
    },
    miceContainer: {
        display: 'grid',
        backgroundColor: '#f9f9f9',
        borderTop: '1px solid #eee',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    miceGrid: {
        display: 'grid',
        padding: 8,
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: 8,
    },
    mouseItem: {
        backgroundColor: '#ecf0f1',
        padding: 8,
        borderRadius: 6,
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#2c3e50',
    },
    addMouseButton: {
        marginTop: 8,
        padding: '6px 10px',
        borderRadius: 4,
        border: '1px solid #2ecc71',
        backgroundColor: '#2ecc71',
        color: '#fff',
        fontSize: '0.9rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#27ae60',
        },
    },
    miceLoading: {
        color: 'black'
    },
    noMiceMessage: {
        color: 'black'
    },
});
