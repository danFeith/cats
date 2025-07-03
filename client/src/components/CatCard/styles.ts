import { createUseStyles } from 'react-jss';

export const useCatCardStyles = createUseStyles({
    cardContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    cardBody: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ddd',
        borderRadius: 8,
        borderBottomLeftRadius: ({ isMouseCardOpen }: { isMouseCardOpen: boolean }) =>
            isMouseCardOpen ? 0 : 8,
        borderBottomRightRadius: ({ isMouseCardOpen }: { isMouseCardOpen: boolean }) =>
            isMouseCardOpen ? 0 : 8,
        padding: 12,
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
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 12px 12px',
    },
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
    deleteButton: {
        background: "transparent",
        border: "none",
        color: "#e74c3c",
        cursor: "pointer",
        fontSize: "1.2rem",
        "&:hover": {
            color: "#c0392b",
        },
    },
    chevron: {
        marginLeft: 6,
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
